import { Request, Response } from "express"

import { Pets } from '../models/Pets'

export function home(req: Request, res: Response){
    res.status(200).render('pages/page', {
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        classHome: 'active',
        filter: Pets.allPets()
    })
}

export function dogs(req: Request, res: Response){
    res.status(200).render('pages/page', {
        banner: {
            title: 'Todos os Cachorros',
            background: 'banner_dog.jpg'
        },
        classDogs: 'active',
        filter: Pets.getFromType("dog")
    })
}

export function cats(req: Request, res: Response){
    res.status(200).render('pages/page', {
        banner: {
            title: 'Todos os Gatos',
            background: 'banner_cat.jpg'
        },
        classCats: 'active',
        filter: Pets.getFromType("cat")
    })
}

export function fishes(req: Request, res: Response){
    res.status(200).render('pages/page', {
        banner: {
            title: 'Todos os Peixes',
            background: 'banner_fish.jpg'
        },
        classFishes: 'active',
        filter: Pets.getFromType("fish")
    })
}