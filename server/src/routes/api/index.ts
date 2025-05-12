import express, { Request, Response, Router } from "express";
import NotesModel from "@/models/notes";
import mongoose from "mongoose";

const router: Router = express.Router();

// ============================
//         📓 NOTES ROUTES
// ============================

router.get("/notes", async (_req: Request, res: Response): Promise<void> => {
  try {
    const notes = await NotesModel.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error(`[ERROR] Failed to fetch notes:`, error);
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

router.get("/notes/:id", async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  const { id } = req.params;

  if (!id || id.length < 5) {
    res.status(400).json({ error: "Invalid ID provided." });
    return;
  }

  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const note = await NotesModel.findById(id);
      if (!note) {
        res.status(404).json({ error: "Note not found for the given ID." });
        return;
      }
      res.json(note);
    } else {
      res.status(400).json({ error: "Invalid Object ID format." });
    }
  } catch (error) {
    console.error(`[ERROR] Failed to fetch note details for ID ${id}:`, error);
    res.status(500).json({ error: "Failed to fetch note details" });
  }
});

export default router;
