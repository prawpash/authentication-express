import { zParse } from "@src/utils/zParse"
import express from "express"
import { loginSchema } from "./schemas"

const router = express.Router()

router.post("/", zParse(loginSchema), async (req, res, next) => {

  res.json({ message: "Hello from user route" })
})

export default router
