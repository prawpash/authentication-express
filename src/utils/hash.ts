import logger from "./logger"

export const hashPassword = async (password: string) => {
  try {
    const hashedPassword = await Bun.password.hash(password)

    return hashedPassword
  } catch (error) {
    logger.error(error)
  }
}

export const verifyPassword = async (password: string, hashedPassword: string) => {
  try {
    const isPasswordMatch = await Bun.password.verify(password, hashedPassword)

    return isPasswordMatch
  } catch (error) {
    logger.error(error)
  }
}
