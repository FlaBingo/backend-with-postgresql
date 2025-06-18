import express from "express";
import dotenv from "dotenv"; // import 'dotenv/config';
dotenv.config();
import routes from "./routes/index.js"

const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(routes)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})