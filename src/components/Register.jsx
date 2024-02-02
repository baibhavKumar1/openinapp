/* eslint-disable react/prop-types */
import {  createUserWithEmailAndPassword } from 'firebase/auth';
import { FaGithub,FaTwitter,FaDiscord,FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../util/firebase';

const Register = ({setUser}) => {
    const [email,setEmail]= useState();
    const [password,setPassword] = useState()
    
    const signUpWithEmailPassword=()=> {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                setUser(userCredential)
                navigate('/upload')
            })
            .catch((err) => alert(err.message))
    }

    const navigate = useNavigate()
    return (
        <div className="flex flex-col sm:space-y-2 space-y-4 sm:justify-around h-full">
          <div>
            <p className="text-3xl font-semibold">Sign Up</p>
            <p>Sign up to your account</p>
            </div>
            
            <div className="flex flex-col space-y-4">
                
                <p className="text-lg">Email address</p>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="rounded-xl p-2 pl-4 w-full bg-gray-100"/>
                <p className="text-lg">Password</p>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="rounded-xl p-2 pl-4 w-full bg-gray-100"/>
                <p className="text-indigo-500">Forgot Password?</p>
                <button className="bg-indigo-500 p-2 rounded-xl text-white" onClick={signUpWithEmailPassword}>Sign Up</button>
            </div>
            <div className="flex sm:flex-col m-auto text-center sm:space-y-4">
                <p>Already have an account?</p>
                <button className="text-indigo-500" onClick={()=>navigate('/')}>Login here</button>
            </div>
            <div className='sm:flex hidden justify-center gap-4'>
                <FaGithub size="2em"/>
                <FaTwitter size="2em"/>
                <FaLinkedinIn size="2em"/>
                <FaDiscord size="2em"/>
            </div>
        </div>
    )
}

export default Register
