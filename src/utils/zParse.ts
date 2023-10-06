import { Request, Response } from "express";
import { AnyZodObject, z } from "zod";

export async function zParse<T extends AnyZodObject>(
  schema: T,
  req: Request,
  res: Response
): Promise<z.infer<T>> {
  try {
    return await schema.parseAsync(req)
  } catch (error) {
    return res.status(400).json(error)
  }
}
