import React from "react";
import { Link } from "react-router-dom";
import Profile from "../assets/profile.png";
import { formatNumber } from "../utils";

const PopularWriters = ({ data }) => {
  return (
    <div className='w-full flex flex-col gap-8'>
      <p className='text-xl font-bold -mb-3 text-gray-600 dark:text-slate-500'>
        Popular Writers
      </p>
      {data?.map((el, id) => (
        <Link
          to={`/writer/${el?._id}`}
          key={el?._id + id}
          className='flex gap-2 items-center'
        >
          <img
            src={el?.image || Profile}
            alt={el?.name}
            className='w-12 h-12 rounded-full object-cover'
          />
          <div className='flex flex-col gap-1'>
            <span className='text-base font-semibold text-slate-800 dark:text-slate-500'>
              {el?.name}
            </span>
            <span className='text-rose-800 font-medium'>
              {formatNumber(el?.followers)}{" "}
              <span className='text-gray-600'>Folloers</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PopularWriters;
