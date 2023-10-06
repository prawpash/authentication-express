import express, { NextFunction, Request, Response } from "express";
import 'dotenv/config'
import userRoutes from "@src/modules/users/routes"
import logger from "./utils/logger";
import customError from "./utils/customError";
import { hashPassword } from "./utils/hash";

export const app = express()
const APP_PORT = process.env.APP_PORT

function errorHandler(
  err: Error & { statusCode?: number },
  req: Request,
  res: Response,
  next: NextFunction
) {
  return res.status(err.statusCode ?? 500).send({ message: err.message })
}

app.use(express.json())

app.get("/", async (req, res) => {
  const password = await hashPassword("hahahaha")
  return res.send(password)
})

// the error handler is placed after routes
// if it were above it would not receive errors
app.use(function(req, res, next) {
  throw new customError(404, "Route Not Found")
});

// the error handler is placed after routes
// if it were above it would not receive errors
app.use(errorHandler)

app.listen(APP_PORT, () => {
  logger.info(`Server is running at http://localhost:${APP_PORT}`)
})
