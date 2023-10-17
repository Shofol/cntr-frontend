/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
import { type NextApiRequest, type NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const options = {
    method: "DELETE",
    url: `https://sandbox-api.onsched.com/consumer/v1/appointments/${req.body.id}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${req.body.token}`,
    },
  };

  const response = await axios.request(options);

  res.status(200).json({ body: response.data });
}
