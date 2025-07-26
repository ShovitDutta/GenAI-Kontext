import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { defineConfig } from "drizzle-kit";
export default defineConfig({
    schema: "./src/lib/db/schema.ts",
    out: "./src/lib/db/migrations",
    dialect: "postgresql",
    dbCredentials: { url: process.env.DATABASE_URL! },
    verbose: true,
    strict: true,
});
