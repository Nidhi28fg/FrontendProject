import { FaArrowTrendUp } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../component/Navbar";

function InternshipDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3031/internship/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <Navbar />
      <div class="border-b-2 border-gray-300 pt-5"></div>
      <div class="flex flex-col justify-center items-center mt-[49px] ">
        <div class="flex justify-center items-center text-[25px] font-bold mt-2">
          {data.title}
        </div>
        <div class="border-1 border-gray-200 rounded-xl w-4xl mt-3">
          <div class="flex m-8">
            <div>
              <div class="flex gap-1 border border-gray-400 items-center px-2 text-sm font-medium text-[#747474]">
                <span class="text-[#007bff]">
                  <FaArrowTrendUp />
                </span>
                Actively hiring
              </div>
              <div class="flex items-center text-[25px] font-bold mt-2">
                {data.title}
              </div>
              <div class=" flex text-[17px] font-semibold">
                Company Name: {data.company}
              </div>
              <div class="flex gap-1 items-center text-gray-500 text-sm font-semibold mt-[17px]">
                <span class="text-[15px]">
                  <FiMapPin />
                </span>
                Location: {data.location}
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-12">
            <div class="rounded-3xl bg-white px-8 pb-6  w-4xl ">
              <div class="text-sm font-medium">{data.stiped}</div>
              <div class="text-gray-500 text-sm font-semibold mb-1">
                Duration: {data.duration}
              </div>
              <div class="border-b-2 border-gray-300 mb-1"></div>

              <div class="flex gap-1 items-center text-gray-500 text-sm  font-semibold mt-[12px]">
                <span class="text-[18px]">
                  <LiaMoneyBillSolid />
                </span>
                Internship Description: {data.description}
              </div>
              <div class="flex gap-1 items-center text-gray-500 text-sm  font-semibold mt-[12px]">
                <span class="text-[18px]">
                  <LiaMoneyBillSolid />
                </span>
                Stipend: {data.stipend}
              </div>
              <div>
                <div class="text-gray-600 text-sm font-semibold mt-[12px]">
                  <p>Number Of Openings: 10</p>
                </div>
                <div class="mt-4">
                  <p class="font-bold">Who can apply</p>
                  <ul class="px-2 text-gray-600">
                    Only those candidates can apply who: 
                    <li>1. are available for full time (in-office) internship</li>
                    <li>2. can start the internship between 24th Jun'25 and 29th Jul'25</li>
                    <li>3. are available for duration of 3 months</li>
                    <li>4. have relevant skills and interests</li>
                  </ul>
                </div>
                <ul class="flex justify-between text-gray-500 text-sm mt-[45px]">
                  <li class="bg-[#e1e1e1] text-[#5a5555] p-[3px] rounded">
                    Apply Here
                  </li>
                  <li class="flex gap-1 items-center text-[#1da0ed] text-base font-medium">
                    <Link class="flex items-center" to="/internship">
                      Back <IoIosArrowForward />
                    </Link>
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
