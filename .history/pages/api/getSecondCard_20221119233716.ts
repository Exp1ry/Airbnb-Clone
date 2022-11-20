import type { NextApiRequest, NextApiResponse } from "next"
import firstCard from "./secondCard.json"
import { Data } from "../../typings"
import SecondCard from "../../app/SecondCard"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).send(SecondCard as any)
}
