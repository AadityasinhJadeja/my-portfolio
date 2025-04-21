import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import type { Request, Response } from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertMessageSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString(),
      });
      
      // Normally this would actually save to the database
      // For now, we just return a success status
      res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
