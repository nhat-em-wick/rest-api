const express = require('express');
const Post = require('../models/post.model');
const router = express.Router();

//get back all the post
router.get('/',async function(req, res){
  try{
		let showPost = await Post.find();
		res.json(showPost);
	}catch(err){
		res.json({ message: err})
	}
});

//submit post
router.post('/', async function(req, res){
	let post = new Post({
		title: req.body.title,
		description: req.body.description 
	});
	try{
		const savePost =await post.save();
		res.json(savePost);
	}catch(err){
		res.json({message: err});
	}
});

//find post
router.get('/:postId', async function(req, res){
	try{
		let onePost = await Post.findById(req.params.postId);
		res.json(onePost);
	}catch(err){
		res.json({message: err});
	}
});

//delete post
router.delete('/:postId', async function(req, res){
	try{
		const removedPost = await Post.remove({ _id: req.params.postId });
		res.json(removedPost);
	}
	catch(err){
		res.json({message:err});
	}
});

//update post
router.patch('/:postId', async function(req, res){
	try{
		let updatePost = await Post.updateOne(
			{_id: req.params.postId },
			{ $set: { title: req.body.title }
		});
		res.json(updatePost);
	}catch(err){
		res.json({message:err});
	}
})

module.exports = router;