import express from "express";
import dotenv from "dotenv"; // import 'dotenv/config';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})