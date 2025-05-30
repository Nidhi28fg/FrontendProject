import axios from "axios";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

import Navbar from "../component/Navbar";

function InternshipDetail() {
  return (
    <div>
      <Navbar />
      <div class="border-b-2 border-gray-300 pt-5"></div>
      <div class="flex flex-col justify-center items-center mt-[49px] ">
        
        <div class="flex justify-center items-center text-[25px] font-bold mt-2">
                title
              </div> 
        <div class="border-1 border-gray-200 rounded-xl w-4xl mt-3">
          <div class="flex m-8">
            <div>
                <div class="flex gap-1 border border-gray-400 items-center px-2 text-xs font-medium text-[#747474]">
                <span class="text-[#007bff]">
                  <FaArrowTrendUp />
                </span>
                Actively hiring
              </div>
              <div class="flex items-center text-[25px] font-bold mt-2">
                title
              </div>
              <div class=" flex text-[17px] font-semibold">
                company
              </div>
               <div class="flex gap-1 items-center text-gray-500 text-xs font-semibold mt-[17px]">
                <span class="text-[15px]">
                  <FiMapPin />
                </span>
                {/* {data.location} */}
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-12 mt-9 pb-12 ">
            <div class="rounded-3xl bg-white p-6  w-4xl ">
              
              <div class="mt-3 text-sm font-medium">{/* {data.stiped} */}</div>
              <div class="text-gray-500 text-xs font-semibold mb-1">
                {/* {data.duration} */}
              </div>
              <div class="border-b-2 border-gray-300 mb-1"></div>
             
              <div class="flex gap-1 items-center text-gray-500 text-xs  font-semibold mt-[12px]">
                <span class="text-[18px]">
                  <LiaMoneyBillSolid />
                </span>
                {/* {data.description} */}
              </div>
              <div class="flex gap-1 items-center text-gray-500 text-xs  font-semibold mt-[12px]">
                <span class="text-[15px]">
                  <CiCalendar />
                </span>
                {/* {data.duration} */}
              </div>
              <div>
                <ul class="flex justify-between text-gray-500 text-xs mt-[45px]">
                  <li class="bg-[#e1e1e1] text-[#5a5555] p-[3px] rounded">
                    Apply Here
                  </li>
                  <li class="flex gap-1 items-center text-[#1da0ed] text-base font-medium">
                    Back <IoIosArrowForward />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternshipDetail;
