// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { fullName, email, phone, city, jobId } = req.body;

  console.log(prisma.application);

  const result = await prisma.application.create({
    data: {
      fullName,
      email,
      phone,
      city,
      jobId,
    },
  });

  res.status(201).json({ message: "Application created", result });
}
