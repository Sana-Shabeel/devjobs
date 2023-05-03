import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    prisma.jobs
      .findMany({
        include: {
          applications: true,
        },
      })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  }
}
