import connection from "../db/database.js";
import { QueryResult } from "pg";
import { noteEntity } from "src/protocols/notes.js";

function getAllNotes(): Promise<QueryResult<noteEntity>> {
    const notes: Promise<QueryResult<noteEntity>> = connection.query(`SELECT * FROM notes;`)
    return notes;
}

function insertingNotes(text: string): Promise<QueryResult> {
    const insert: Promise<QueryResult> = connection.query(`INSERT INTO notes (text) VALUES ($1);`, [text])
    return insert
}

function updatingNote(text: string, id: number): Promise<QueryResult> {
    const update: Promise<QueryResult> = connection.query(`UPDATE notes SET text=$1 WHERE id=$2;`, [text, id])
    return update
}

function deletingNote(id: number): Promise<QueryResult> {
    const deleted: Promise<QueryResult> = connection.query(`DELETE FROM notes WHERE id=$1;`, [id])
    return deleted
}

function countNotes(): Promise<QueryResult> {
    const numberofNotes: Promise<QueryResult> = connection.query(`SELECT COUNT(*) FROM notes;`)
    return numberofNotes
}

function checkIfExist(id:number): Promise<QueryResult> {
    const numberofNotes: Promise<QueryResult> = connection.query(`SELECT * FROM notes WHERE id=$1;`,[id])
    return numberofNotes
}

export {
    getAllNotes,
    insertingNotes,
    updatingNote,
    deletingNote,
    countNotes,
    checkIfExist
}