/* eslint-disable react/prop-types */
import { FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FaGithub, FaTwitter, FaDiscord, FaLinkedinIn, FaApple } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../util/firebase';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {
                console.log(res)
                setUser(res)
                navigate('/upload')
            })
            .catch(err => alert(err))
    }
    const signInWithEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                setUser(userCredential)
                navigate('/upload')
            })
            .catch((err) => alert(err))
    }
    const navigate = useNavigate()
    return (
        <div className="flex flex-col sm:space-y-2 space-y-4 sm:justify-around h-full">
            <div>
                <p className="text-3xl font-semibold">Sign In</p>
                <p>Sign in to your account</p>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center bg-gray-100 rounded-xl gap-2 p-2 my-2">
                    <FcGoogle size="1.5em" />
                    <button onClick={signInWithGoogle}>Login with Google</button>
                </div>
                <div className="flex items-center bg-gray-100 rounded-xl gap-2 p-2 my-2">
                    <FaApple color="gray" size="1.5em" />
                    <button>Login with Apple</button>
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                <p className="text-lg">Email address</p>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} className="rounded-xl p-2 pl-4 w-full bg-gray-100" />
                <p className="text-lg">Password</p>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="rounded-xl p-2 pl-4 w-full bg-gray-100" />
                <p className="text-indigo-500">Forgot Password?</p>
                <button className="bg-indigo-500 p-2 rounded-xl text-white" onClick={signInWithEmailPassword}>Sign In</button>
            </div>
            <div className="flex sm:flex-col m-auto text-center sm:space-y-4">
                <p>Don&apos;t have an account?</p>
                <button className="text-indigo-500" onClick={() => navigate('/register')}>Register here</button>
            </div>
            <div className='sm:flex hidden justify-center gap-4'>
                <FaGithub size="2em" />
                <FaTwitter size="2em" />
                <FaLinkedinIn size="2em" />
                <FaDiscord size="2em" />
            </div>
        </div>
    )
}

export default Login
