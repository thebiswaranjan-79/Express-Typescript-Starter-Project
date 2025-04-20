import { Request, Response } from "express";
import { NotFoundError } from "../utils/errors/notFound.error";
import fs from "fs/promises";

export const pingHandler = async(req: Request, res: Response) => {
  try {
    await fs.readFile("Sample");

    res.status(200).json({ message: "PONG" });
  } catch (error) {
    throw new NotFoundError("File Not Found");
  }
};
