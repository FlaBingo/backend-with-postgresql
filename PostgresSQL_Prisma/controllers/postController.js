import prisma from "../db.config.js";

export async function getAllPosts(req, res) {
  const posts = await prisma.post.findMany({});
  return res.json({ success: true, data: posts });
}

export async function createPost(req, res) {
  const { user_id, title, description } = req.body;

  try {
    if (!title || !description || !user_id) {
      return res.status(400).json({
        status: 400,
        message: "Title, description and user_id are required"
      });
    }
    const post = await prisma.post.create({
      data: {
        title,
        description,
        user_id: Number(user_id),
      },
    });

    return res.json({ success: true, data: post });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
}

export async function updatePost(req, res) {
  const post_id = req.params.id;
  const { user_id, title, description } = req.body;

  try {
    const updatedPost = await prisma.post.update({
      where: {
        id: Number(post_id),
        user_id: Number(user_id)
      },
      data: {
        title,
        description,
      },
    });

    return res.json({success:true, data: updatedPost})

  } catch (error) {
    return res.json({success: false, message: error.message})
  }
}

export async function deletePost(req, res) {
  const post_id = req.params.id;
  await prisma.post.delete({
    where:{
      id: Number(post_id)
    }
  })
  return res.json({success: true, message: "Post deleted"})
  
}

export async function getUserPosts(req, res) {
  const {user_id} = req.params;
  const userPosts = await prisma.post.findMany({
    where:{
      user_id: Number(user_id)
    }
  })

  return res.json({success:true, data: userPosts})
  
}