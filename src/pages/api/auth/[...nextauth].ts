import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const tokenRes = await fetch(
          `${process.env.BACKEND_SERVER_URL}/api/auth/jwt/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              username: credentials.username,
              password: credentials.password,
              grant_type: "password",
              scope: "",
              client_id: "",
              client_secret: "",
            }).toString(),
          },
        );
        if (!tokenRes.ok) {
          const errorDetail = await tokenRes.json();
          throw new Error(errorDetail.detail || "Error logging in");
        }
        const tokenResJson = await tokenRes.json();

        // Use token to get user details from /users/me endpoint
        const userRes = await fetch(
          `${process.env.BACKEND_SERVER_URL}/api/users/me`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${tokenResJson.access_token}`,
              "Content-Type": "application/json",
            },
          },
        );
        if (!userRes.ok) {
          const errorDetail = await userRes.json();

          throw new Error(errorDetail.detail || "Error fetching user details");
        }
        const userResJson = await userRes.json();
        // Combine userDetails and token into a single object
        const retVal = { u: userResJson, t: tokenResJson };
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
    async jwt({ token, user, account, profile, isNewUser }) {
      console.error(
        `inside jwt callback. token: ${JSON.stringify(
          token,
          null,
          2,
        )} and user: ${JSON.stringify(user, null, 2)}`,
      );
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      console.error(
        `inside session callback. session: ${JSON.stringify(
          session,
          null,
          2,
        )} and token: ${JSON.stringify(token)}`,
      );
      session.accessToken = token.accessToken;
      return session;
    },
  },
  debug: true,
});
