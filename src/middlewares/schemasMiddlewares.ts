import joi from "joi";
import { Request, Response, NextFunction } from "express";

const noteSchema = joi.object({
    text: joi.string().required()
})

function noteValidation(req:Request,res:Response, next:NextFunction): void{
    const text:string = req.body.text
    const validatingNote = noteSchema.validate({text})

    if(validatingNote.error){
        res.status(422).send(validatingNote.error.details[0].message)
        return
    }
    
    res.locals.text = req.body.text

    next()
}

export {
    noteValidation
}