import React, { useState,useEffect } from "react";
import account from "../Appwrite/appwriteConfig";

const AuthButton=()=>{
    const[user,setUser]=useState(null);
    useEffect(()=>{
        const getUser=async()=>{
            try {
                const userDetails=await account.get();
            } catch (error) {
                setUser(null)
            }
        };
        getUser()
    },[]);
    const handleLogout=async()=>{
        await account.deleteSession("current")
        window.location.reload();
    }

    if(user){
        return (
            <div>
                <p>Welcome,{user.name}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    }
    else{
        return(
            <div>
                 <a href="#login">Login</a> | <a href="#signup">Signup</a>
            </div>
        )
    }
}
export default AuthButton;