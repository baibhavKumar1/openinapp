/* eslint-disable react/prop-types */
import pfp from '../assets/image 1.svg'
import { FaRegBell } from 'react-icons/fa6'
import Drop from './Drop'
import image from '../assets/Subtract.svg'
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import Table from './Table';
import Mobilesidebar from './Mobilesidebar';
import { useNavigate } from 'react-router-dom';

const Upload = ({ user }) => {
  const navigate = useNavigate()
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState()
  const [userImage, setUserImage] = useState()
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    setUserImage(user?.user.providerData[0].photoURL)
  }, [user])
  return (
    <div className='h-screen w-full flex bg-slate-50'>
      <Sidebar />
      <Mobilesidebar isOpen={isSidebarOpen} closeMenu={toggleSidebar} />
      <div className='w-5/6 sm:w-full p-2'>
        <div className='sm:hidden h-max flex justify-between mt-4 px-2'>
          <p className='text-xl'>Upload CSV</p>
          <div className='flex gap-4 items-center'>
            <FaRegBell size="1.5em" />
            <img src={userImage ? userImage : pfp} className='w-8 h-8 rounded-full' />
          </div>
        </div>
        <div className='hidden sm:flex items-center justify-between mt-1'>
          <div className='flex items-center gap-4'>
            <button onClick={toggleSidebar}><MdMenu size="2em" /></button>
            <img src={image} onClick={() => navigate('/')} />
            <p className='text-2xl'>Base</p>
          </div>
          <div className='flex gap-4 items-center'>
            <FaRegBell size="1.5em" />
            <img src={userImage ? userImage : pfp} className='w-8 h-8 rounded-full' />
          </div>
        </div>
        <p className='hidden text-xl text-left mt-2'>Upload CSV</p>
        <div className='flex flex-col justify-around items-center sm:h-max gap-10 w-full'>
          <Drop setData={setData} />
        </div>
        {data&& <div>
          <Table data={data} />
        </div>}
      </div>
    </div>
  )
}

export default Upload


