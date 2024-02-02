/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Table = ({ data }) => {
  const [optionsArray, setOptionsArray] = useState([]);

  const handleConvert = (inputString) => {
    const resultArray = inputString.split(',').map(item => item.trim());
    return resultArray;
  };

  useEffect(() => {
    if (data) {
      const initialOptions = handleConvert("Technology,Fashion,Food,Travel,Sports,Music,Art,Health,Education,Finance");
      const initialOptionsArray = data.map(() => ({ selectedOptions: [], availableOptions: [...initialOptions] }));
      setOptionsArray(initialOptionsArray);
    }
  }, [data]);

  const handleSelectChange = (event, rowIndex) => {
    const selectedValue = event.target.value;

    setOptionsArray((prevOptionsArray) => {
      const updatedOptionsArray = [...prevOptionsArray];
      const selectedOptions = updatedOptionsArray[rowIndex].selectedOptions;

      if (selectedValue !== '' && !selectedOptions.includes(selectedValue)) {
        selectedOptions.push(selectedValue);
        updatedOptionsArray[rowIndex].availableOptions = updatedOptionsArray[rowIndex].availableOptions.filter(
          (option) => option !== selectedValue
        );
      }

      return updatedOptionsArray;
    });
  };

  const handleRemoveOption = (removedOption, rowIndex) => {
    setOptionsArray((prevOptionsArray) => {
      const updatedOptionsArray = [...prevOptionsArray];
      const selectedOptions = updatedOptionsArray[rowIndex].selectedOptions;

      const newSelectedOptions = selectedOptions.filter((option) => option !== removedOption);
      updatedOptionsArray[rowIndex].selectedOptions = newSelectedOptions;
      updatedOptionsArray[rowIndex].availableOptions = [...updatedOptionsArray[rowIndex].availableOptions, removedOption];

      return updatedOptionsArray;
    });
  };

  return (
    <div>
      {data && 
        <>
        <p className="text-3xl">Uploads</p>
        <table className="bg-gray-200 p-2 rounded-xl w-[80%] m-auto mt-4 border-separate border-spacing-y-4 className='overflow-x-scroll overflow-y-auto'">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Links</th>
              <th>Prefix</th>
              <th>Add Tags</th>
              <th>Selected Tags</th>
            </tr>
          </thead>
          <tbody className="m-2">
            {data.map((row, index) => (
              <tr key={index} className="bg-white m-2">
                <td className="p-2">{row.id}</td>
                <td ><a href={`www.${row.links}`}>{row.links}</a></td>
                <td >{row.prefix}</td>
                <td className="p-2">
                  <select
                    value=""
                    onChange={(event) => handleSelectChange(event, index)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {optionsArray[index]?.availableOptions.map((option) => (
                      <option key={option} value={option} className="rounded-xl">
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-2">
                  {optionsArray[index]?.selectedOptions.length > 0 && (
                    <div className="space-x-2">
                      {optionsArray[index].selectedOptions.map((selectedOption) => (
                        <div
                          key={selectedOption}
                          className="bg-indigo-500 text-white px-2 py-1 rounded-md inline-flex items-center"
                        >
                          {selectedOption}
                          <button
                            onClick={() => handleRemoveOption(selectedOption, index)}
                            className="ml-2 text-white  focus:outline-none"
                          >
                            &#10005;
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
      }
    </div>
  );
};

export default Table;
