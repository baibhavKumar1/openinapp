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
      {data && (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
              <th>Show tag</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td><a href={`www.${row.links}`}>{row.links}</a></td>
                <td>{row.prefix}</td>
                <td className="border border-gray-300 p-2">
                  <select
                    value=""
                    onChange={(event) => handleSelectChange(event, index)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {optionsArray[index]?.availableOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="border border-gray-300 p-2">
                  {optionsArray[index]?.selectedOptions.length > 0 && (
                    <div className="space-x-2">
                      {optionsArray[index].selectedOptions.map((selectedOption) => (
                        <div
                          key={selectedOption}
                          className="bg-blue-500 text-white px-2 py-1 rounded-md inline-flex items-center"
                        >
                          {selectedOption}
                          <button
                            onClick={() => handleRemoveOption(selectedOption, index)}
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
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
