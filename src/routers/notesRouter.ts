import express from "express";
import { noteValidation } from "../middlewares/schemasMiddlewares.js"
import { checkId } from "../middlewares/idMiddlewares.js";
import { getNotes, insertNotes, updateNotes, deleteNotes, numberOfNotes } from "../controllers/notesController.js"

const notesRouter = express.Router()

notesRouter.get("/notes", getNotes)
notesRouter.post("/notes", noteValidation, insertNotes)
notesRouter.put("/notes/:id", noteValidation, checkId, updateNotes)
notesRouter.delete("/notes/:id", checkId, deleteNotes)
notesRouter.get("/numbernotes", numberOfNotes)


export default notesRouter