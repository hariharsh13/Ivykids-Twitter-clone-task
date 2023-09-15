import express from "express";
import { verifytoken } from "../verifytoken.js";
import { createTweet , deleteTweet , likeOrDislike , getAllTweets , getUserTweets ,getExploreTweets } from "../controllers/tweet.js"

const router = express.Router();

//create a tweet
router.post('/',verifytoken , createTweet);

//Delete a tweet
router.delete ("/:id" , verifytoken , deleteTweet);

//like or dislike a tweet
router.put('/:id/like' , likeOrDislike);

//get all timeline tweet
router.get('/timeline/:id', getAllTweets);

//get user tweet ojnly
router.get("/user/all/:id" ,getUserTweets);

//explore
router.get("/explore" , getExploreTweets);
export default router;