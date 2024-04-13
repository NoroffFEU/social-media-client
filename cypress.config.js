import { defineConfig } from "cypress"
import dotenv from "dotenv"
dotenv.config()

export default defineConfig({
      e2e: {
            setupNodeEvents(on, config) {
                  // implement node event listeners here
            },
      },
      env: {
            password: process.env.USER_PASSWORD,
      },
})
