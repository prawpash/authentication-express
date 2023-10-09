import { zParse } from "@src/utils/zParse"
import express from "express"
import {
  loginSchema,
  routeRegisterSchema
} from "./schemas"
import { registerUserHandler } from "./controllers"

const router = express.Router()

router.post("/", zParse(loginSchema), async (req, res, next) => {

  res.json({ message: "Hello from user route" })
})

router.post("/register", zParse(routeRegisterSchema), registerUserHandler)

export default router
