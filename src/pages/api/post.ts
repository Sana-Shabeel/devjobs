// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      company,
      logo,
      logoBackground,
      position,
      postedAt,
      contract,
      location,
      website,
      apply,
      description,
      requirementContent,
      requirementsItem,
      roleContent,
      rolesItem,
    } = req.body;
    console.log("from post", req.body);

    const result = await prisma.jobs.create({
      data: {
        company,
        logo,
        logoBackground,
        position,
        postedAt,
        contract,
        location,
        website,
        apply,
        description,
        requirementContent,
        requirementsItem,
        roleContent,
        rolesItem,
      },
    });
    res.status(201).json({ message: "Booking created", result });
  }
}
