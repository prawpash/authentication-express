import type { Config } from "drizzle-kit"
import 'dotenv/config'

export default {
  schema: "./src/db_schemas/*",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
} satisfies Config
