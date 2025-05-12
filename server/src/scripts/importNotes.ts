import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Note from "../models/notes";
import { connectToDb } from "../Utility/connection";

const notesDir = path.join(__dirname, "..", "seeds", "Notes");

const loadMarkdownNotes = (dir: string): any[] => {
  const entries: any[] = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      entries.push(...loadMarkdownNotes(fullPath)); // Recursive
    } else if (item.endsWith(".md")) {
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);
      entries.push({
        title: data.title || item.replace(".md", ""),
        category: data.category || path.basename(dir),
        content,
      });
    }
  }

  return entries;
};

const seedNotes = async () => {
  await connectToDb();
  const notes = loadMarkdownNotes(notesDir);
  await Note.deleteMany({});
  const result = await Note.insertMany(notes);
  console.log(`✅ Inserted ${result.length} notes`);
  process.exit(0);
};

seedNotes();
