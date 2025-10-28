import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // serve certificates and other attached assets from the repo at
  // GET /assets/certs/<filename>
  const certsPath = path.resolve(process.cwd(), "attached_assets");
  app.use(
    "/assets/certs",
    express.static(certsPath, { index: false, extensions: ["pdf"] }),
  );

  // put additional application routes here (prefix with /api if needed)

  const httpServer = createServer(app);

  return httpServer;
}
