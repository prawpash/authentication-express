import { z } from "zod";

const commonData = z.object({
  email: z.string().email(),
  password: z.string()
})
export const loginSchema = z.object({
  body: commonData
})

export const registerSchema = z.object({
  name: z.string(),
  salt: z.string().length(6).nullish()
}).merge(commonData)

export const routeRegisterSchema = z.object({
  body: registerSchema
})

export type CreateUserInput = z.infer<typeof registerSchema>
