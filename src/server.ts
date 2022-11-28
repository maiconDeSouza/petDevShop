import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'

import path from 'path'

import router from './routes/routes'

const app = express()
dotenv.config()
const pathPublic = path.join(__dirname, '../', 'public')
const pathViews = path.join(__dirname, 'views')

app.set('view engine', 'mustache')
app.set('views', pathViews)
app.engine('mustache', mustache())

app.use(express.static(pathPublic))


app.use(router)
app.use((req: Request, res: Response) => {
    res.status(404).render('pages/404')
})

const port = process.env.PORT || 1992
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))