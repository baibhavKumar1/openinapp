/* eslint-disable react/prop-types */
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import excel from '../assets/Microsoft_Excel-Logo.wine.svg'
import { FaXmark } from 'react-icons/fa6';
const Drop = ({ setData }) => {
  const [filename, setFilename] = useState()

  const onDrop = useCallback((acceptedFiles) => {

    let z = acceptedFiles.map((file) => file.path)

    setFilename(z[0])
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet)
        setData(parsedData)
      };

      reader.readAsArrayBuffer(file);
    });
  }, [setData]);
  const remove = () => {
    setFilename(null)
    setData()
  }
  const { getRootProps, getInputProps,open } = useDropzone({ onDrop, noClick: true });

  return (
    <div className='w-[30%] sm:w-[60%] my-12'>
      <div {...getRootProps()} className='h-60 text-center border-2 border-dashed bg-white flex flex-col justify-center items-center sm:aspect-square'>
        <input {...getInputProps()} />
        <img src={excel} className='w-20' />
        {!filename && <p className='text-center'>Drag drop an Excel file here, or click to select one</p>}
        {filename && <div>
          <p>{filename}</p>
          <button onClick={remove}><FaXmark color='red' /></button>
        </div>}
      </div>
      <button onClick={open} className='text-center bg-indigo-500 w-full sm:w-60 p-2 rounded-lg'>Upload</button>
    </div>
  );
};



export default Drop;
