import { Request, Response } from 'express';
import { getAllNotes, insertingNotes, updatingNote, deletingNote, countNotes } from "../repositories/notesRepository.js"

async function getNotes(req: Request, res: Response): Promise<void> {

    try {
        const notes = await getAllNotes()
        res.send(notes.rows)
        return

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
        return
    }
}

async function insertNotes(req: Request, res: Response): Promise<void> {
    const text: string = res.locals.text

    try {
        await insertingNotes(text)
        res.sendStatus(201)
        return

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
        return
    }
}

async function updateNotes(req: Request, res: Response): Promise<void> {
    const text: string = res.locals.text
    const id: number = Number(res.locals.id)

    try {
        await updatingNote(text, id)
        res.sendStatus(200)
        return

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
        return
    }
}

async function deleteNotes(req: Request, res: Response): Promise<void> {
    const id: number = Number(res.locals.id)

    try {
        await deletingNote(id)
        res.sendStatus(200)
        return

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
        return
    }
}

async function numberOfNotes(req: Request, res: Response): Promise<void> {

    try {
        const notes = await countNotes()

        res.send(notes.rows[0])
        return

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
        return
    }

}

export {
    getNotes,
    insertNotes,
    updateNotes,
    deleteNotes,
    numberOfNotes
}