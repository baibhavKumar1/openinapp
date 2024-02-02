import pfp from './assets/image 1.svg'
import { FaRegBell } from 'react-icons/fa6'
import Drop from './Drop'
import image from './assets/Subtract.svg'
import { MdMenu } from "react-icons/md";
import Trialsidebar from './Mobilesidebar'
import { useState } from 'react'
import Sidebar from './Sidebar';
const Upload = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [data,setData]= useState()
  console.log(data)
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
const initialOptions = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'];

const [selectedOptions, setSelectedOptions] = useState([]);
const [availableOptions, setAvailableOptions] = useState(initialOptions);

const handleSelectChange = (event) => {
  const selectedValue = event.target.value;

  if (selectedValue !== '' && !selectedOptions.includes(selectedValue)) {
    // Add the selected option to the list of selected options
    setSelectedOptions((prevSelected) => [...prevSelected, selectedValue]);

    // Remove the selected option from the available options
    setAvailableOptions((prevOptions) =>
      prevOptions.filter((option) => option !== selectedValue)
    );
  }
};

const handleRemoveOption = (removedOption) => {
  // Remove the option from the list of selected options
  setSelectedOptions((prevSelected) =>
    prevSelected.filter((option) => option !== removedOption)
  );

  // Add the removed option back to the available options
  setAvailableOptions((prevOptions) => [...prevOptions, removedOption]);
};

  return (
    <div className='h-screen w-screen flex'>
      <Sidebar />
      <Trialsidebar isOpen={isSidebarOpen} closeMenu={toggleSidebar} />
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
        {data && <div className='border overflow-x-scroll overflow-y-auto'>
          {/* <table className='border '>
            <thead className='border'>
              <tr className='border'>
                <th>SI No.</th>
                <th>Links</th>
                <th>Prefix</th>
                <th className="border border-gray-300 p-2">Select</th>
           <th className="border border-gray-300 p-2">Selected Options</th>
              </tr>
            </thead>
            <tbody>
               <tr className='border'>
                 <td>01</td>
                 <td>www.google.com</td>
                 <td>prefixSample</td>
                 <td className="border border-gray-300 p-2">
              <select
              value=""
              onChange={handleSelectChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="" disabled>
                Select an option
              </option>
              {availableOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </td>
          <td className="border border-gray-300 p-2">
            {selectedOptions.length > 0 && (
              <div className="space-x-2">
                {selectedOptions.map((selectedOption) => (
                  <div
                    key={selectedOption}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md inline-flex items-center"
                  >
                    {selectedOption}
                    <button
                      onClick={() => handleRemoveOption(selectedOption)}
                      className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      &#10005;
                    </button>
                  </div>
                ))}
              </div>
            )}
          </td>
               </tr>
               <tr>
                 <td>Roy</td>
               </tr>
             </tbody>
           </table> */}
           <table>
            <thead>
              <tr>
                {Object.keys(data[0]).map((key)=>(
                  <th key={key}>{key}</th>
                ))}
                <th>Show tag</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row,index)=>(
                <tr key={index}>
                  {/* {Object.values(row).map((value,index)=>(
                    <td key={index}>{value}</td>
                  ))} */}
                  <td>{row.id}</td>
                  <td><a href={ `www.${row.links}`}>{row.links}</a></td>
                  <td>{row.prefix}</td>
                  <td>{row['select tags']}</td>
                </tr>
              ))}
            </tbody>
           </table>
         </div>}

       </div>
     </div>
   )
 }

 export default Upload


