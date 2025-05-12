import express from "express";
import path from "node:path";
import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "@/routes/api";
import { connectToDb } from "@/Utility/connection";
import fs from "fs";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Serve static assets if needed later
// app.use("/images", express.static(path.join(process.cwd(), "public/images")));

app.use("/api", apiRoutes);

app.get("/api/test", (_req, res) => {
  res.status(200).json({ status: "alive" });
});

app.use(express.static(path.join(process.cwd(), "../client/dist")));

app.get("*", (req, res) => {
  if (req.path.startsWith("/api")) {
    res.status(404).send("Not found.");
    return;
  }

  const indexPath = path.join(process.cwd(), "../client/dist/index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send("Frontend not found.");
  }
});

const main = async () => {
  try {
    await connectToDb();
    console.log("✅ Database connected successfully.");

    const PORT = process.env.PORT || 3001;
    console.log("🔍 Binding to port:", PORT);
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (error) {
    console.error("❌ Failed to start server:", error);
  }
};

main().catch((error) => console.error("❌ Unexpected error:", error));
