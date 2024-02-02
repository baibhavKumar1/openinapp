import Login from './Login';
import image from './assets/Left side.svg'
import image2 from './assets/Logo.svg'
import { FaGithub,FaTwitter,FaDiscord,FaLinkedinIn } from "react-icons/fa";
const Home = () => {
    return (
        <>
        <div className='w-screen flex sm:h-screen'>
            <div className='sm:hidden w-1/2 h-screen overflow-clip relative '>
                <div className='flex flex-col justify-around absolute top-0 left-0 z-10 h-full w-full gap-10'>
                    <img className=' mx-10 w-12' src={image2} />
                    <p className='text-center text-6xl font-bold text-white tracking-wide'>BASE</p>
                    <div className='flex justify-center gap-4 '>
                    <FaGithub size="2em" color='white'/>
                    <FaTwitter size="2em" color='white'/>
                    <FaLinkedinIn size="2em" color='white'/>
                    <FaDiscord size="2em" color='white'/>
                    </div>
                </div>
                <img src={image} alt='image' className='' />
            </div>
            <div className='flex justify-center sm:flex-col items-center w-1/2 sm:w-full'>
                <div className='sm:flex w-full border-2 hidden bg-indigo-500 items-center'>
                    <img className=' p-4' src={image2} alt='logo'/>
                   <p className='text-xl text-white'>Base</p>
                </div>
                <div className='sm:p-4 w-2/3 sm:w-full sm:m-auto sm:h-[90vh]'><Login /></div>
            </div>
        </div>
        </>
    )
}

export default Home
