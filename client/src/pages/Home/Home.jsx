import React from "react" ;
import LeftSidebar from "../../component/LeftSidebar/LeftSidebar";
import RightSidebar from "../../component/RightSidebar/RightSidebar";
import MainTweet from "../../component/MainTweet/MainTweet";
import Signin from "../Signin/signin";


import { useSelector } from "react-redux"; //go through the store and find the state
//import { useNavigate } from "react-router-dom";

const Home = ()=>{

    const {currentUser} = useSelector((state)=> state.user);

    console.log("user", currentUser);

return (
    <>
    {!currentUser ? (
        <Signin />
    ) : (
        <div className="grid grid-cols-1 md:grid-cols-4">
         <div className="px-6">
          <LeftSidebar/>
    </div>

   <div className="col-span-2 border-x-2 border-t-slate-800 px-6 ">
    <MainTweet/>
     </div>

    <div className="px-6">
        <RightSidebar/>
    </div>
</div>
    )}
    
        </>
    );
};




export default Home;