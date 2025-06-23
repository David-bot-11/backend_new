import dotenv from "dotenv"
import CONNECT_DB from "./database/dataBase.database.js"

dotenv.config({
    path:'/.env'
})

CONNECT_DB()
.then((result) => {
 app.listen(process.env.PORT|| 8000,()  => {
    console.log('Server is running in:,${process.env.PORT}');
    
 })
    
}).catch((err) => {
    console.log("MongoDB connection failed:", err);
    
});