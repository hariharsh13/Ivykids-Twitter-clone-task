import  React, { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux"; //used for dispatching some action to our redux store
import { loginStart , loginSuccess, loginFailed } from "../../redux/userSlice";
 

import { useNavigate } from "react-router-dom";

const Signin = () =>{
const[username,setUsername] = useState("");
const[password,setPassword] = useState("");
const[email , setEmail] = useState("");

const dispatch = useDispatch(); 
const navigate= useNavigate();

    /*** Handle login */
const handleLogin = async(e)=>{

    e.preventDefault(); //used to prevent the default form submission behavior.
    dispatch(loginStart());
   
    try{
        const res = await axios.post("/auth/signin", {username,password}); 
        dispatch(loginSuccess(res.data));
        navigate("/");
    }catch(err){
        dispatch(loginFailed());
          //console.log(err);
    }
};

     /*** Handle Signup*/

const handleSignup = async (e) =>{
    e.preventDefault();
    dispatch(loginStart());

    try{
        const res = await axios.post("/auth/signup",{ 
            username , 
            email , 
            password,
        });
        dispatch(loginSuccess(res.data));
        navigate("/");
    }catch(err){
        dispatch(loginFailed());
    }
}


    return (
    <form className  ="bg-gray-200 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
        <h2 className="text-3xl font-bold text-center">Sign in to X</h2>
    
    <input 
    onChange={(e) => setUsername(e.target.value)}
    type="text"
    placeholder="username" 
    className="text-xl py-2 rounded-full px-4" 
    />
    
    <input 
    onChange={(e)=>setPassword(e.currentTarget.value)}
    type="text"
    placeholder="password" 
    className="text-xl py-2 rounded-full px-4" 
    />

    <button className="text-xl py-2 rounded-full px-4 bg-zinc-900 text-white"
    onClick={handleLogin}
    >
        Sign in</button>
    
    <p className="text-center text-xl">Don't have an account!!</p>
    




    <input 
    onChange={(e) => setUsername(e.target.value)}
    type="text"
    placeholder="username" 
    className="text-xl py-2 rounded-full px-4" 
    />


       <input 
    onChange={(e) => setEmail(e.target.value)}

    type="email"
    placeholder="email" 
    required
    className="text-xl py-2 rounded-full px-4" 
    />

    <input 
    onChange={(e)=>setPassword(e.currentTarget.value)}
    type="text"
    placeholder="password" 
    className="text-xl py-2 rounded-full px-4" 
    />

    <button
    onClick={handleSignup}
     className="text-xl py-2 rounded-full px-4 bg-zinc-900 text-white "
    type="submit"
    >
        Sing Up
    </button>
    
    </form>
    );
}
export default Signin;