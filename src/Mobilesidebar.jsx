/* eslint-disable react/prop-types */
import image from './assets/Subtract.svg'
import { FaBell, FaCalendarDays, FaGear,FaXmark } from "react-icons/fa6";
import { HiClipboardList } from "react-icons/hi";
import { TbFileInvoice } from "react-icons/tb";
import { MdDashboard, MdInsertChart } from "react-icons/md";
const Trialsidebar = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={`fixed sm:block hidden top-0 left-0 h-full w-[90%] rounded-r-xl bg-gray-100 text-black transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform ease-in-out duration-300`}
    >
      
      <div className='w-[90%] m-auto h-full py-10 space-y-8 '>
      <div className='flex justify-between'>
      <div className='flex gap-4 justify-center'>
      <img src={image} alt='image'/>
      <p className='text-3xl'>Base</p>
      </div>
      <button onClick={closeMenu}><FaXmark/></button>
      </div>
      <div className='w-4/5 m-auto space-y-8'>
      <div className='flex gap-4 items-center'>
      <MdDashboard size="1.5em" color='gray'/>
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
    </div>
  );
};

export default Trialsidebar;
