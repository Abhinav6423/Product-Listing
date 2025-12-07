import dotenv from "dotenv"
dotenv.config({
    path: "./.env",
})
import express from "express"
const app = express()

import cors from "cors"
import cookieParser from "cookie-parser"

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
))

connectDB()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//dummy routes
app.get("/", (req, res) => {
    res.send("Hello World")
})

import productRoutes from "./routes/Product.routes.js"
import connectDB from "./dbConnect.js"
app.use("/api/products", productRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

