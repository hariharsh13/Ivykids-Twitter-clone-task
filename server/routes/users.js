import express from "express";
import {getUser,update,deleteUser,follow,unfollow} from "../controllers/user.js"
import { verifytoken } from "../verifytoken.js";
const router = express.Router();

//update user
router.put('/:id',verifytoken,update)

//get user
router.get('/find/:id' ,getUser);

//delete user
router.delete('/:id',verifytoken,deleteUser);

//follow
router.put('/follow/:id' ,verifytoken,follow);

//unfollow
router.put('unfollow/:id' , verifytoken ,unfollow);

export default router;