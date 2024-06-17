import React, { useCallback, useState } from "react";
import { DropCsv } from "../assets";

import csvFileToArray from "../utils/csvFileToArray";

import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";

const CustomerOnboarding = () => {
  const [files, setFiles] = useState();
  const [isUploaded, setIsUploaded] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0].type);
    if (acceptedFiles[0].type === "text/csv") {
      console.log("Dropped files", acceptedFiles);
      setFiles(...acceptedFiles);
      setIsUploaded(true);
    } else {
      alert("Uplaod CSV file");
    }
  }, []);

  const handleSubmit = () => {
    var reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target.result);
      const text = e.target.result;
      csvFileToArray(text);
    };

    reader.readAsText(files);
  };

  const handleChangeFile = () => {
    setIsUploaded(false);
    setFiles();
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className=" bg-[#E0F2FF] max-w-[1519px] mx-auto h-screen">
      <div className="max-w-6xl h-fit bg-white mx-auto py-4 ">
        <div className="m-8 hidden md:block">
          <svg
            width="auto "
            height="40"
            viewBox="0 0 1013 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto max-w-930 px-20"
          >
            <circle cx="263.5" cy="20.5" r="7.5" fill="#D9D9D9" />
            <circle cx="503.5" cy="20.5" r="7.5" fill="#D9D9D9" />
            <circle cx="762.5" cy="20.5" r="7.5" fill="#D9D9D9" />
            <circle cx="1005.5" cy="19.5" r="7.5" fill="#D9D9D9" />
            <circle cx="20" cy="20" r="20" fill="#0C79B6" />
            <circle cx="20.5" cy="20.5" r="7.5" fill="#D9D9D9" />
            <line
              x1="12.9925"
              y1="20.491"
              x2="1012.99"
              y2="17.5"
              stroke="#D9D9D9"
              stroke-width="5"
            />
            <line
              x1="12.9925"
              y1="20.491"
              x2="1012.99"
              y2="17.5"
              stroke="#D9D9D9"
              stroke-width="5"
            />
            <line
              x1="12.9925"
              y1="20.491"
              x2="1012.99"
              y2="17.5"
              stroke="#D9D9D9"
              stroke-width="5"
            />
          </svg>

          <div className="grid grid-cols-5 max-w-6xl mx-auto justify-between text-center">
            <p>Autofill with CSV</p>
            <p>Customer Information</p>
            <p>Contact Detail</p>
            <p>Acquisition Information</p>
            <p>Others</p>
          </div>
        </div>
        <h1 className=" flex justify-center text-center text-4xl font-bold font-serif mb-4">
          Autofill With CSV
        </h1>
        <div className="max-w-3xl mx-auto ">
          {!isUploaded ? (
            <div className="m-4">
              <p>
                Upload CSV file to automatically fill in the customer
                information.
              </p>
              <div
                {...getRootProps()}
                className={`bg-gray-100 max-w-[701px] min-h-[200px] border border-black border-dashed flex justify-center items-center text-center
                 ${isDragActive ? "bg-gray-500" : "bg-gray-100"}`}
              >
                <input
                  {...getInputProps()}
                  className="hidden"
                  accept={".csv"}
                />
                <div className="flex flex-col justify-center">
                  <img
                    src={DropCsv}
                    alt="img of dropcsv"
                    className="flex justify-center mx-auto h-10 w-10"
                  />
                  <p className="font-bold text-lg">Drop File Here</p>
                  <p className="text-sm">
                    or{" "}
                    <label className="text-blue-600 font-bold cursor-pointer">
                      Select Files
                    </label>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center bg-slate-50 shadow-lg max-w-lg p-4">
              <h1 className="text-xl font-bold">{files.name}</h1>
              <button
                className="bg-[#0C79B6] text-white font-bold p-2 my-4 w-[200px] rounded-md"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="bg-[#0C79B6] text-white font-bold p-2 my-4 w-[200px] rounded-md"
                onClick={handleChangeFile}
              >
                Change File
              </button>
            </div>
          )}
        </div>
        <hr className="max-w-4xl mx-auto mt-7 border-black" />
        <p className="font-bold flex justify-center m-4">or</p>

        <Link to="/customerinformationformpage1">
          <button className="bg-[#0C79B6] md:w-[600px]  mx-auto flex justify-center p-2  text-white font-bold text-xl rounded-md">
            Add data manually
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CustomerOnboarding;
