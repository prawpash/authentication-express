import db from "@src/utils/db";
import { CreateUserInput } from "./schemas";
import { usersTable } from "@src/db_schemas/users";
import { hashPassword } from "@src/utils/hash";
import randomString from "@src/utils/randStr";
import { eq } from "drizzle-orm";

export async function findUserByEmail(email: string) {
  const user = await db.select().from(usersTable).where(eq(usersTable.email, email))

  return user
}

export async function createUser(body: CreateUserInput) {
  const { password, name, email } = body

  const hashedPassword = await hashPassword(password)
  const salt = await randomString()

  const user = await db.insert(usersTable).values({
    name: name,
    email: email,
    password: hashedPassword,
    salt: salt
  })

  return user
}
