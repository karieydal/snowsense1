"use client";
import "@/app/styles/innskraning.css";

import { NextPage } from 'next'; 
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from 'react';


interface Props{}

const SignIn: NextPage = (props): JSX.Element => {
    const [userInfo, setUserInfo] = useState({email: "", password: ""})
    const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) =>{
        e.preventDefault()

        const res = await signIn('credentials', {
            email: userInfo.email, 
            password: userInfo.password,
            redirect: false
        })
        
        console.log(res);
    };
    return(
    
    <div className="sign-in-form">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
            value={userInfo.email}
            onChange={({ target }) => 
                setUserInfo({ ...userInfo, email: target.value})
            }
            type="email"  
            placeholder="email@email.com"
            />
            <input
             value={userInfo.password}
             onChange={({ target }) => 
             setUserInfo({ ...userInfo, password: target.value})
             }
            type="password" 
            placeholder="**********"
            />
            <input 
            type="submit" 
            placeholder="Login"
            />
        </form>
    </div>
    );
};

export default SignIn

