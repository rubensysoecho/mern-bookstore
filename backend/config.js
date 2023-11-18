require('dotenv').config()

export const PORT = 5555

export const mongoDBURL =
    `mongodb+srv://${process.env.USER}:${process.env.API_KEY}@books-store-mern.bobcc1s.mongodb.net/?retryWrites=true&w=majority`
