import pfp from '../assets/image 1.svg'
import { FaRegBell } from 'react-icons/fa6'
import Drop from './Drop'
import image from '../assets/Subtract.svg'
import { MdMenu } from "react-icons/md";
import { useState } from 'react'
import Sidebar from './Sidebar';
import Table from './Table';
import Mobilesidebar from './Mobilesidebar';
const Upload = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [data,setData]= useState()

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='h-screen w-screen flex'>
      <Sidebar />
      <Mobilesidebar isOpen={isSidebarOpen} closeMenu={toggleSidebar} />
      <div className='w-5/6 sm:w-full p-2'>
        <div className='sm:hidden h-max flex justify-between mt-4 px-2'>
          <p className='text-xl'>Upload CSV</p>
          <div className='flex gap-4 items-center'>
            <FaRegBell size="1.5em" />
            <img src={pfp} />
          </div>
        </div>
        <div className='hidden sm:flex items-center justify-between mt-1'>
          <div className='flex items-center gap-4'>
            <button onClick={toggleSidebar}><MdMenu size="2em" /></button>
            <img src={image} />
            <p className='text-2xl'>Base</p>
          </div>
          <div className='flex gap-4 items-center'>
            <FaRegBell size="1.5em" />
            <img src={pfp} />
          </div>
        </div>
        <p className='hidden text-xl text-left mt-2'>Upload CSV</p>
        <div className=' flex flex-col justify-around items-center h-[90vh] sm:h-max gap-10'>
          <div className='h-64 w-96 '>
            <Drop setData={setData}/>
          </div>
        </div>
        <div className='border overflow-x-scroll overflow-y-auto'>
          <Table data={data} inputString="hi,new,data,bane"/>
         </div>
       </div>
     </div>
   )
 }

 export default Upload


