import { Router, Request,  Response} from "express";

import * as PageControllers from '../controllers/PageControllers'
import * as SearchControllers from '../controllers/SearchControllers'


const router = Router()

router.get('/', PageControllers.home)
router.get('/dogs', PageControllers.dogs)
router.get('/cats', PageControllers.cats)
router.get('/fishes', PageControllers.fishes)

router.get('/search', SearchControllers.search)

export default router