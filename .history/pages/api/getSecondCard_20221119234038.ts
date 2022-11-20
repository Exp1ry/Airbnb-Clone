import type { NextApiRequest, NextApiResponse } from "next"
import firstCard from "./secondCard.json"
import { Data } from "../../typings"
import SecondCard from "./secondCard.json"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(SecondCard as any)
}
