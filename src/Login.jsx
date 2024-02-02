import {FcGoogle} from 'react-icons/fc'

import { FaGithub,FaTwitter,FaDiscord,FaLinkedinIn,FaApple } from "react-icons/fa";
const Login = () => {
    return (
        <div className="flex flex-col sm:space-y-2 space-y-4 sm:justify-around h-full">
          <div>
            <p className="text-3xl font-semibold">Sign In</p>
            <p>Sign in to your account</p>
            </div>
            <div className="flex justify-between">
            <div className="flex items-center bg-gray-100 rounded-xl gap-2 p-2 my-2">
            <FcGoogle size="1.5em"/>
                <p>Login with Google</p>
            </div>
            <div className="flex items-center bg-gray-100 rounded-xl gap-2 p-2 my-2">
            <FaApple color="gray" size="1.5em"/>
                <p>Login with Apple</p>
            </div>
            </div>
            <div className="flex flex-col space-y-4">
                <p className="text-lg">Email address</p>
                <input type="email" className=" rounded-xl p-2 pl-4 w-full bg-gray-100"/>
                <p className="text-lg">Password</p>
                <input type="password" className="rounded-xl p-2 pl-4 w-full bg-gray-100"/>
                <p className="text-indigo-500">Forgot Password?</p>
                <button className="bg-indigo-500 p-2 rounded-xl text-white">Sign In</button>
            </div>
            <div className="flex sm:flex-col m-auto text-center sm:space-y-4">
                <p>Don&apos;t have an account?</p>
                <button className="text-indigo-500">Register here</button>
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

export default Login
