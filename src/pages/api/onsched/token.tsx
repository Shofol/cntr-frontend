/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
import { type NextApiRequest, type NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const params = {
    client_id: process.env.ONSCHED_CLIENT_ID ?? "",
    client_secret: process.env.ONSCHED_CLIENT_SECRET ?? "",
    scope: "OnSchedApi",
    grant_type: "client_credentials",
  };
  const tokenURL = "https://sandbox-identity.onsched.com/connect/token";

  const response = await axios.post(tokenURL, new URLSearchParams(params));

  res.status(200).json({ token: response.data });
}
