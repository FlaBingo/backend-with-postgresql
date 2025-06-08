import express from "express";

import path, { dirname } from "path";
import { fileURLToPath } from "url";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// console.log(__filename); // E:\vsCode\Postgresql\SQLite\src\server.js
// console.log(__dirname);  //E:\vsCode\Postgresql\SQLite\src
app.use(express.static(path.join(__dirname, '../public')))

// Serving up the HTML file from the /public directory
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));