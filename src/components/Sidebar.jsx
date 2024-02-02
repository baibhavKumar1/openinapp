import image from '../assets/Subtract.svg'
import { FaBell, FaCalendarDays, FaGear } from "react-icons/fa6";
import { HiClipboardList } from "react-icons/hi";
import { TbFileInvoice } from "react-icons/tb";
import { MdDashboard, MdInsertChart } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-1/6 h-full py-10 space-y-8 sm:hidden bg-white'>
      <div className='flex gap-4 justify-center'>
      <img src={image} alt='image' onClick={()=>navigate('/')}/>
      <p className='text-3xl'>Base</p>
      </div>
      <div className='w-4/5 m-auto space-y-8'>
      <div className='flex gap-4 items-center'>
      <MdDashboard  size="1.5em" color='gray'/>
        <p className='text-lg'>Dashboard</p>
      </div>
      <div className='flex gap-4 items-center'>
      <MdInsertChart  size="1.5em" color='gray'/>
        <p className='text-lg'>Upload</p>
      </div>
      <div className='flex gap-4 items-center'>
      <TbFileInvoice  size="1.5em" color='gray'/>
        <p className='text-lg'>Invoice</p>
      </div>
      <div className='flex gap-4 items-center'>
      <HiClipboardList  size="1.5em" color='gray'/>
        <p className='text-lg'>Schedule</p>
      </div>
      <div className='flex gap-4 items-center'>
      <FaCalendarDays  size="1.5em" color='gray'/>
        <p className='text-lg'>Calendar</p>
      </div>
      <div className='flex gap-4 items-center'>
      <FaBell  size="1.5em" color='gray'/>
        <p className='text-lg'>Notification</p>
      </div>
      <div className='flex gap-4 items-center'>
      <FaGear  size="1.5em" color='gray'/>
        <p className='text-lg'>Settings</p>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
