import { Request, Response } from "express"

import { Pets } from '../models/Pets'

export function search(req: Request, res: Response){
    const  query : string  = req.query.q as string
    
    res.status(200).render('pages/page', {
        classHome: '',
        filter: Pets.getFromName(query),
        query
    })
}