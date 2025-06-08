import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;







app.get("/", (req, res) => {
    console.log("Oh! i crashed on the endpoint", req.method)
    res.sendStatus(201)
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));