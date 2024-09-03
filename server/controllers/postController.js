

// ================================ CREATE A POST
// POST: api/posts
// PROTECTED
const createPost = async (req, res, next) => {
    res.json("Create post")
}

// ================================ GET ALL POSTS
// GET: api/posts
// PROTECTED
const getPosts = async (req, res, next) => {
    res.json("Get all posts")
}

// ================================ GET SINGLE POST
// GET: api/posts/:id
// UNPROTECTED
const getPost = async (req, res, next) => {
    res.json("Get Single Post")
}

// ================================ GET POSTS BY CATEGORY
// GET: api/posts/categories/:category
// UNPROTECTED
const getCatPosts = async (req, res, next) => {
    res.json("Get posts by category")
}


// ================================ GET AUTHOR POST
// GET: api/posts/users/:id
// UNPROTECTED
const getUserPosts = async (req, res, next) => {
    res.json("Get user Post")
}

// ================================ EDIT POST
// PATCH: api/posts/:id
// PROTECTED
const editPost = async (req, res, next) => {
    res.json("Edit post")
}

// ================================ DELETE POST
// GET: api/posts/:id 
// PROTECTED
const deletePosts = async (req, res, next) => {
    res.json("Delete post")
}


module.exports = {createPost, getPosts, getPost, getCatPosts, getUserPosts, editPost, deletePosts}