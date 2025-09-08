import { Hono } from "hono";
import { cors } from "hono/cors";

import { env } from "./config/env";

const app = new Hono().basePath("/api/v1")

app.use('*', cors({
  origin: '*', // Allow all origins
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow specific methods
  allowHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default {
  fetch: app.fetch,
  port: env.PORT,
};