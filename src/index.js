import dotenv from "dotenv"
import CONNECT_DB from "./database/database.models.js"

dotenv.config({
    path:'/.env'
})

CONNECT_DB()

