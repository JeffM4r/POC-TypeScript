import joi from "joi";
import { checkIfExist } from "../repositories/notesRepository.js";
import { Request, Response, NextFunction } from "express";

const idSchema = joi.number().required()

async function checkId(req: Request, res: Response, next: NextFunction): Promise<void>{
    const id: number = Number(req.params.id)
    const validateId = idSchema.validate(id)

    if(validateId.error){
        res.status(422).send(validateId.error.details[0].message)
        return
    }

    try {
        const idCheck = await checkIfExist(id)

        if(idCheck.rows.length > 0){
            res.locals.id = req.params.id
            next()
            
        }else{

            res.sendStatus(404)
            return
        }

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
        return
    }

}

export {
    checkId
}