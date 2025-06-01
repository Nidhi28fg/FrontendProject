import axios from "axios";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import InternshipDetail from "./InternshipDetail";



function Internship() {
  const [debounc, setDebounc] =  useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:3031/internship")
      .then((res) => {setData(res.data);
      setFilterData(res.data);
    }  
    )
      .catch((err) => console.log(err));
  }, []);

  
 const handleFilter1 = (value) => {
  const res = filterData.filter( data => data.title.toLowerCase().includes(value) || data.company.toLowerCase().includes(value) || data.location.toLowerCase().includes(value) || data.stipend.toLowerCase().includes(value) || data.duration.toLowerCase().includes(value))
  setData(res);
 }

 useEffect(() => {
    const timerId = setTimeout(()=> {
      if (debounc !== ""){
         const res = filterData.filter( data => data.title.toLowerCase().includes(debounc) || data.company.toLowerCase().includes(debounc) )
        setData(res);
      }
    }, 1000)
     return () => {
      clearInterval(timerId)
     }
 }, [debounc])

 const handleFilter = (e) => {
  setDebounc(e.target.value);
 }




  return (
    <div>
      <Navbar />
      <div class="border-b-2 border-gray-300 pt-5"></div>
      <div class="flex  ">
      <div class="m-8 p-8  mt-[49px]">
      <p >Profile or Company Name</p>
      {/* <input class="border border-[#c7c6c6] bg-white h-10 w-[271px] p-2" placeholder="e.g. Web developer" type="text" onChange={e => handleFilter(e.target.value)}/>       */}
      <input class="border border-[#c7c6c6] bg-white h-10 w-[271px] p-2" placeholder="e.g. Web developer" type="text" onChange={handleFilter} value={debounc}/>      
      <p class="mt-12" >Location</p>
      <input class="border border-[#c7c6c6] bg-white h-10 w-[271px] p-2" placeholder="e.g. remote" type="text" onChange={e => handleFilter1(e.target.value)} />
      
      <div><input class="mt-12" type="checkbox" onChange={e => handleFilter1(e.target.value)} value="remote"/> <label htmlFor="remote">Remote</label> </div>
      
      <p class="mt-12" >Stipend</p>
      <div class="flex gap-2">
      <input type="checkbox" onChange={e => handleFilter1(e.target.value)} value="3,000"/> <label htmlFor="3,000">3,000</label>
      <input type="checkbox" onChange={e => handleFilter1(e.target.value)} value="4,000"/> <label htmlFor="4,000">4,000</label>
      <input type="checkbox" onChange={e => handleFilter1(e.target.value)} value="5,000"/> <label htmlFor="5,000">5,000</label>
      <input type="checkbox" onChange={e => handleFilter1(e.target.value)} value="6,000"/> <label htmlFor="6,000">6,000</label>
      </div>

      <p class="mt-12" >Duration</p>
      <div class="flex flex-wrap gap-1.5">
      <input type="checkbox" onChange={e => handleFilter1(e.target.value)} value="3 month"/> <label htmlFor="3 month">3 month</label>
      <input type="checkbox" onChange={e => handleFilter1(e.target.value)} value="2 month"/> <label htmlFor="2 month">2 month</label>   
      <input type="checkbox" onChange={e => handleFilter1(e.target.value)} value="4 month"/> <label htmlFor="4 month">4 month</label>
      <input type="checkbox" onChange={e => handleFilter1(e.target.value)} value="5 month"/> <label htmlFor="5 month">5 month</label>
      <input type="checkbox" onChange={e => handleFilter1(e.target.value)} value="6 month"/> <label htmlFor="6 month">6 month</label>  
      </div>
      </div>
      


      <div class="bg-[#f8f8f8] w-full">
        <div class="flex justify-center mt-8">
          <div>
            <div class="flex justify-center items-center text-[25px] font-bold mt-2">
  {data.length}              Total Internships
            </div>
            <div class=" flex justify-center gap-1 text-[17px] font-semibold">
              Latest Summer Internships in
              <span class="text-[#2b9fe2]"> India</span>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-12 mt-9 pb-12">
            
          {data.map((data, i) => {
            return (
              <div key={i} class="rounded-3xl bg-white p-6 w-[282px]">
                <div class="flex gap-1 border border-gray-400 items-center px-2 w-[120px] text-xs font-medium text-[#747474]">
                  <span class="text-[#007bff]">
                    <FaArrowTrendUp />
                  </span>
                  Actively hiring
                </div>
                <div class="mt-3 text-sm font-medium">{data.title}</div>
                <div class="text-gray-500 text-xs font-semibold mb-1">
                  Company: {data.company}
                </div>
                <div class="border-b-2 border-gray-300 mb-1"></div>
                <div class="flex gap-1 items-center text-gray-500 text-xs  font-semibold mt-[17px]">
                  <span class="text-[15px]">
                    <FiMapPin />
                  </span>
                  {data.location}
                </div>
                <div class="flex gap-1 items-center text-gray-500 text-xs  font-semibold mt-[12px]">
                  <span class="text-[18px]">
                    <LiaMoneyBillSolid />
                  </span>
                  {data.stipend}
                </div>
                <div class="flex gap-1 items-center text-gray-500 text-xs  font-semibold mt-[12px]">
                  <span class="text-[15px]">
                    <CiCalendar />
                  </span>
                  {data.duration}
                </div>
                <div>
                  <ul class="flex justify-between text-gray-500 text-xs mt-[45px]">
                    <li class="bg-[#e1e1e1] text-[#5a5555] p-[3px] rounded">
                      Internship
                    </li>
                   <Link class="flex gap-1 items-center text-[#1da0ed] text-base font-medium" to={`/internshipdetail/${data.id}`}>
                      View details <IoIosArrowForward /> </Link>
                  </ul>
                </div>
              </div>  
            );
          })}
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Internship;
