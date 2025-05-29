import axios from "axios";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";

function Internship() {
     const [data, setData] = useState([])
     useEffect(()=>{
        axios.get('http://localhost:3031/internship')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
     }, [])


  return (
    <div class="bg-[#f0fbff]">
      <div class="flex justify-center mt-12">
        <div>
          <div class="flex justify-center items-center text-[25px] font-bold mt-[49px]">
            Recommended for you{" "}
          </div>
          <div class=" flex justify-center gap-1 text-[17px] font-semibold">
            as per your <span class="text-[#2b9fe2]"> preferences</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-12 mt-9 pb-12">
        
      {data.map((data, i) => {
        return <div key={i} class="rounded-3xl bg-white p-6 w-[282px]">
          <div class="flex gap-1 border border-gray-400 items-center px-2 w-[120px] text-xs font-medium text-[#747474]">
            {" "}
            <span class="text-[#007bff]">
              <FaArrowTrendUp />
            </span>{" "}
            Actively hiring
          </div>
          <div class="mt-3 text-sm font-medium">{data.title}</div>
          <div class="text-gray-500 text-xs font-semibold mb-1">InternBit</div>
          <div class="border-b-2 border-gray-300 mb-1"></div>
          <div class="flex gap-1 items-center text-gray-500 text-xs  font-semibold mt-[17px]">
            {" "}
            <span class="text-[15px]">
              <FiMapPin />
            </span>{" "}
            Work From Home
          </div>
          <div class="flex gap-1 items-center text-gray-500 text-xs  font-semibold mt-[12px]">
            <span class="text-[18px]">
              {" "}
              <LiaMoneyBillSolid />{" "}
            </span>{" "}
            &#8377; 25,000 - 40,000/month
          </div>
          <div class="flex gap-1 items-center text-gray-500 text-xs  font-semibold mt-[12px]">
            <span class="text-[15px]">
              {" "}
              <CiCalendar />{" "}
            </span>
            6 Month
          </div>
          <div>
            <ul class="flex justify-between text-gray-500 text-xs mt-[45px]">
              <li class="bg-[#e1e1e1] text-[#5a5555] p-[3px] rounded">
                Internship
              </li>
              <li class="flex gap-1 items-center text-[#1da0ed] text-base font-medium">
                View details <IoIosArrowForward />
              </li>
            </ul>
          </div>
        </div>

     })}
      
      </div>
    </div>
  );
}

export default Internship;
