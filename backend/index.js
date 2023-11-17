import express, { response } from 'express'
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose' 
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res) =>  {
    console.log(req)
    return res.status(234).send('WELCOME TO MERN RUBEN')
})

app.use('/books', booksRoute)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () =>  {
            console.log(`App is listening to post: ${ PORT }`)
        })
    })
    .catch((error) =>    {
        console.log(error.message)
    })