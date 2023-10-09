import { Request, Response } from "express";
import { createUser, findUserByEmail } from "./services";
import { request } from "http";
import { CreateUserInput } from "./schemas";
import customError from "@src/utils/customError";

const getUsersHandler = (
  req: Request,
  res: Response
) => {
}

export const registerUserHandler = async (
  req: Request,
  res: Response
) => {
  const body: CreateUserInput = req.body

  const isUserExists = await findUserByEmail(body.email)

  if (isUserExists.length > 0) {
    return res.status(409).json({ message: "User with this email is already exists." })
  }

  const user = await createUser(body)

  const createdUser = await findUserByEmail(body.email)

  return res.json(createdUser)
}
