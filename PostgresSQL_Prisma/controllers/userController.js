import prisma from "../db.config.js";
import bcrypt from "bcryptjs"

export const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const findUser = await prisma.user.findUnique({
            where:{ email }
        })
        if(findUser){
            return res.status(400).json({status: 400, message:"Email Already Taken..."})
        }
        const hashedPassword = await bcrypt.hash()
        const newUser = await prisma.user.create({
            data:{ name, email, password }
        })

        return res.status(201).json({message: "User created successfully"})

    } catch (error) {
        console.log(`Error creating user: ${error.message}`);
        return res.status(500).json({message: "Internal Server Error"})
    }
}