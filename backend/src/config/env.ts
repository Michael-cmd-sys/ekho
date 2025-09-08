import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
 
export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    PORT: z.coerce.number().default(3000),
    ENV: z.enum(['development', 'production']).default('development'),
    CLOUDINARY_CLOUD_NAME: z.string(),
    CLOUDINARY_API_KEY: z.string(),
    CLOUDINARY_API_SECRET: z.string(),
    CLERK_SECRET_KEY: z.string(),
    CLERK_PUBLISHABLE_KEY: z.string(),
    ARCJET_KEY: z.string(),
  },
 
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});