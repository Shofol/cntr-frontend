import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  type BEError,
  type Token,
  type User,
  type UserData,
} from "types/dashboard/auth";
import { baseURL } from "~/utils/config";

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken: string;
    userData: UserData;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "email" },
        password: { label: "password", type: "password" },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async authorize(credentials, req): Promise<any> {
        const tokenRes = await fetch(`${baseURL}auth/jwt/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            username: credentials?.username ?? "",
            password: credentials?.password ?? "",
            grant_type: "password",
            scope: "",
            client_id: "",
            client_secret: "",
          }).toString(),
        });
        if (!tokenRes.ok) {
          const errorDetail = (await tokenRes.json()) as BEError;
          throw new Error(`${errorDetail.detail}` || "Error logging in");
        }
        const tokenResJson = (await tokenRes.json()) as Token;

        // Use token to get user details from /users/me endpoint
        const userRes = await fetch(`${baseURL}users/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${tokenResJson.access_token}`,
            "Content-Type": "application/json",
          },
        });
        if (!userRes.ok) {
          const errorDetail = (await userRes.json()) as BEError;
          throw new Error(errorDetail.detail || "Error fetching user details");
        }
        const userResJson = (await userRes.json()) as User;
        // Combine userDetails and token into a single object
        const retVal: UserData = { u: userResJson, t: tokenResJson };
        console.error(
          `inside provider, retVal is ${JSON.stringify(retVal, null, 2)}`,
        );
        return retVal;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/login",
  },
  callbacks: {
    jwt({ token, user, account, profile, isNewUser }) {
      console.error(
        `inside jwt callback. token: ${JSON.stringify(
          token,
          null,
          2,
        )} and user: ${JSON.stringify(user, null, 2)}`,
      );
      if (user) {
        const userData = user as unknown as UserData;
        token.accessToken = userData.t.access_token;
        token.userData = userData.u;
      }
      return token;
    },
    session({ session, token }) {
      console.error(
        `inside session callback. session: ${JSON.stringify(
          session,
          null,
          2,
        )} and token: ${JSON.stringify(token)}`,
      );
      if (session) {
        session.accessToken = token.accessToken as string;
        session.userData = token.userData as UserData;
      }
      return session;
    },
  },
  debug: true,
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
