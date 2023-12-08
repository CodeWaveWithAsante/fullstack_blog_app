import React, { useState } from "react";
import { Logo } from "../components";

export const SignupPage = () => {
  const user = {};
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [file, setFile] = useState("");
  const [fileURL, setFileURL] = useState("");

  if (user.token) window.location.replace("/");

  return (
    <div className='flex w-full h-[100vh]'>
      <div className='hidden md:flex flex-col gap-y-4 w-1/3 h-full bg-black items-center justify-center'>
        {fileURL && (
          <img
            src={fileURL || file}
            alt=''
            className='w-16 h-16 rounded-full'
          />
        )}
        <Logo type='sigin' />
        <span className='text-xl font-semibold text-white'>Welcome!</span>
      </div>

      <div className='flex w-full md:w-2/3 h-full bg-white dark:bg-gradient-to-b md:dark:bg-gradient-to-r from-black via-[#071b3e] to-black items-center px-4 md:px-20 lg:px-40'>
        <div className='w-full h-full flex flex-col items-center justify-center py-12 px-4 sm:px-0 lg:px-8'>
          <div className='block mb-10 md:hidden -ml-8'>
            <Logo />
          </div>

          <div className='w-full space-y-6 flex flex-col justify-start'>
            <div className='w-full flex gap-3 md:gap-4 items-center justify-start mb-12'>
              {showFo}
              rm}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
