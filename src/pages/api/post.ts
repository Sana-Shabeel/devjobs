// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { fullName, email, phone, city } = req.body;
    console.log("from post", req.body);

    console.log("from post", req.body);

    res.status(201).json({ message: "Booking created", req: req.body });
  }
}
