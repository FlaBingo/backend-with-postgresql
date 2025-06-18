import prisma from "../db.config.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(name, email, password);
  try {
    if (!email || email.trim() === "") {
      return res.status(400).json({ message: "Please Provide your email" });
    }
    const findUser = await prisma.user.findUnique({
      where: { email },
    });
    if (findUser) {
      return res
        .status(400)
        .json({ status: 400, message: "Email Already Taken..." });
    }
    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 8);
    }
    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(`Error creating user: ${error.message}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export async function updateUser(req, res) {
  const { id } = req.params;
  const { name, email, bio, password } = req.body;

  try {
    if (email) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email,
          NOT: {
            id: Number(id),
          },
        },
      });
      if (existingUser) {
        return res.status(400).json({
          status: 400,
          message: "Email already exists",
        });
      }
    }


    const updatedUser = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
        password,
        bio,
      },
    });

    // console.log(typeof updatedUser, updatedUser)
    if (!updatedUser) {
      return res.json({ message: "User not found" });
    }

    return res.json({
      status: 201,
      message: "User updated Successfully",
      updatedUser,
    });
  } catch (error) {
    console.log("Error in updating user", error.message);
    return res.json({ error: error.message });
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        bio: true,
        email: true,
        create_at: true,
        // Excluding password for security
      },
    });

    if (!users.length) {
      return res.status(404).json({
        status: 404,
        message: "No users found",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    console.log("Error fetching users:", error.message);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

export async function getUser(req, res) {
  const { id } = req.params;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        name: true,
        email: true,
        bio: true,
        create_at: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }

    return res.json({ status: 200, data: user });
  } catch (error) {
    return res.json({ error: error.message });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    });
    return res.json({ message: "User has been deleted" });
  } catch (error) {
    return res.json({ error: error.message });
  }
}
