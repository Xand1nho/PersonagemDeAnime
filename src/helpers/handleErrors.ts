import { Response } from "express";
import { Prisma } from "../../generated/prisma/client";

export function handleErrors(e: any, response: Response) {
  console.error(e);
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    // @ts-ignore
    return response.status(500).json(e.message);
  }
  return response.status(500).json("Unknown error. Try again later");
}
