import { bigint, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod"

export const usersTable = mysqlTable('users', {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  salt: varchar("salt", { length: 6 }).notNull()
})

const insertUserSchema = createInsertSchema(usersTable, {
  email: (schema) => schema.email.email()
})

const selectUserSchema = createSelectSchema(usersTable)
