import express from "express";
import dotenv from "dotenv";
import notesRouter from "./routers/notesRouter.js"

dotenv.config();
const app = express();

app.use(express.json());

app.use(notesRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}.`);
 });