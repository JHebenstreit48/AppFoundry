import express, { Request, Response } from "express";
import path from "node:path";
import fs from "fs";
import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "@/routes/api";
import { connectToDb } from "@/Utility/connection";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// =============================
//         🔧 Middleware
// =============================
app.use(express.json());
app.use(cors({
  origin: "*", // ✅ Allow all origins for now
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false // ❗ Must be false when origin is "*"
}));


// =============================
//         📦 API Routes
// =============================
app.use("/api", apiRoutes);

// =============================
//     🩺 Health Check Route
// =============================
app.get("/api/test", (_req: Request, res: Response) => {
  res.status(200).json({ status: "alive" });
});

// =============================
//     🖼️  Static Frontend Serve
// =============================
const clientPath = path.join(process.cwd(), "../client/dist");
app.use(express.static(clientPath));

// ✅ Wildcard for SPA Routing
app.get("*", (req: Request, res: Response) => {
  if (req.path.startsWith("/api")) {
    res.status(404).send("API route not found.");
    return;
  }

  const indexPath = path.join(clientPath, "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send("Frontend not found.");
  }
});

// =============================
//       🚀 Start Server
// =============================
const main = async () => {
  try {
    await connectToDb();
    console.log("✅ Database connected successfully.");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
  }
};

main().catch(err => console.error("❌ Unexpected error:", err));
