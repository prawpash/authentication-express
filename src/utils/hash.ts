import * as argon2 from "argon2"
import logger from "./logger"

export const hashPassword = async (password: string) => {
  try {
    const hashedPassword = await argon2.hash(
      password,
      {
        secret: Buffer.from(process.env.APP_SECRET)
      }
    )

    return hashedPassword
  } catch (error) {
    logger.error(error)
  }
}

export const verifyPassword = async (password: string, hashedPassword: string) => {
  try {
    const isPasswordMatch = await argon2.verify(hashedPassword, password)

    return isPasswordMatch
  } catch (error) {
    logger.error(error)
  }
}
