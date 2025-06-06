import axios from "axios";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

function Internship() {
  const [debounc, setDebounc] = useState(""); //debounc holds the text currently typed by the user in the search input field. It starts as an empty string. setDebounc updates it whenever the user types. 
  const [data, setData] = useState([]); // State to hold the fetched list of internships
  const [filterData, setFilterData] = useState([]);  // State to hold a copy of the original data (useful for filtering later)
  const [filters, setFilters] = useState({
    location: "",
    stipend: "",
    duration: "",
  });  //filters is an object holding the current values selected in the "Duration", "Stipend", and "Location" dropdowns. It starts with empty strings for all, meaning no filters are initially applied. setFilters updates this object when a dropdown value changes.... spread syntax (...prevFilters) inside setFilters to update just one property of the object while keeping the others.
  
  
  //The user select any value form fileter, which triggers the input's onChange event then handleFilterchange function will start work.
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target); //e.target k though hm pata chal jayega kon sa filter target kiya gaya 
    console.log(name);
    console.log(value); 
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,   
    }));
  };


  //&& and logic both true
  // || or logic true one logic
  const filtereddatas = data.filter((data) => {
    return (
      (filters.location === "" || data.location === filters.location) &&
      (filters.stipend === "" || data.stipend === filters.stipend) &&
      (filters.duration === "" || data.duration === filters.duration)
    );
  });

  //useEffect allows components to perform side effects (actions outside of rendering) after rendering or when specific dependencies (state or props values) change. It's crucial for tasks like data fetching, interacting with browser APIs, or setting up subscriptions/timers. The dependency array controls when the effect runs, and an optional cleanup function helps prevent memory leaks.
//Use useEffect to fetch data when the component mounts
  useEffect(() => {
    axios   //Axios is a library that helps us make HTTP requests (like GET, POST, PUT, DELETE) from our web browser or from a Node.js server. 
      .get("http://localhost:3031/internship/") //A GET request is used to retrieve data from a server. 
      .then((res) => { // What to do if the request is successful
        setData(res.data);
        setFilterData(res.data);
      })
      .catch((err) => console.log(err)); // What to do if the request is ussuccessful
  }, []);// array is empty ([]), the effect will only run once after the initial render of the component. This is useful for things like fetching data when the component first loads.

  useEffect(() => {
    const timerId = setTimeout(() => {  // This code runs AFTER a 1-second delay (debounce)
      // Apply filtering based on debounc (search) AND filters state
      //If the user doesn't type anything else for 1 second, the function inside the setTimeout finally runs.
      if (debounc !== " " && debounc !== "") {
        console.log(debounc);
        const res = filterData.filter(
          (data) =>
            data.title.toLowerCase().includes(debounc) ||
            data.company.toLowerCase().includes(debounc)
        );
        setData(res); //Calling setData schedules another re-render according to filter
      }
    }, 1000);
    return () => {
      clearInterval(timerId); 
    };
  }, [debounc, filters]); //Dependency Array: Run effect when searchText and filter changes

  const handleFilter = (e) => {  //handleFilter calls setDebounc with the new input value. then 
    setDebounc(e.target.value);
  };

  const resetfunc = (e) => {
    setDebounc(""); //search and filter value empty
    setFilters({
      location: "",
      stipend: "",
      duration: "",
    });
  };

  return (
    <div>
      <Navbar />
      <div class="border-b-2 border-gray-300 pt-5"></div>
      <div class="flex  ">
        <div class="m-8 p-8  mt-[49px]">
          <button
            class="flex justify-end mb-8 text-black font-bold items-center"
            onClick={resetfunc}
          >
            Reset All Filter{" "}
          </button>
          <p>Profile or Company Name</p>
          <input
            class="border border-[#c7c6c6] bg-white h-10 w-[271px] p-2"
            placeholder="e.g. Web developer"
            type="text"
            onChange={handleFilter}
            value={debounc}
          />

          <p class="mt-12">Duration</p>
          <div class="flex flex-wrap gap-1.5">
            <div style={{ marginBottom: "10px" }}>
              <select
                name="duration"
                value={filters.duration}
                onChange={handleFilterChange}
                class="border border-[#c7c6c6] bg-white h-10 w-[271px] p-2"
              >
                <option value="">All Duration</option>
                <option value="2 Months">2 Months</option>
                <option value="3 Months">3 Months</option>
                <option value="4 Months">4 Months</option>
                <option value="5 Months">5 Months</option>
                <option value="6 Months">6 Months</option>
              </select>
            </div>
          </div>

          <p class="mt-12">Stipend</p>
          <div class="flex flex-wrap gap-1.5">
            <div style={{ marginBottom: "10px" }}>
              <select
                name="stipend"
                value={filters.stipend}
                onChange={handleFilterChange}
                class="border border-[#c7c6c6] bg-white h-10 w-[271px] p-2"
              >
                <option value="">All Stipend</option>
                <option value="₹3,000/month">₹3,000/month</option>
                <option value="₹4,000/month">₹4,000/month</option>
                <option value="₹5,000/month">₹5,000/month</option>
                <option value="₹6,000/month">₹6,000/month</option>
                <option value="₹7,000/month">₹7,000/month</option>
                <option value="₹8,000/month">₹8,000/month</option>
                <option value="₹9,000/month">₹9,000/month</option>
                <option value="₹10,000/month">₹10,000/month</option>
              </select>
            </div>
          </div>

          <p class="mt-12">Location</p>
          <div class="flex flex-wrap gap-1.5">
            <div style={{ marginBottom: "10px" }}>
              <select
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                class="border border-[#c7c6c6] bg-white h-10 w-[271px] p-2"
              >
                <option value="">All Location</option>
                <option value="Remote">Remote</option>
                <option value="Delhi">Delhi</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Chennai">Chennai</option>
                <option value="Gurugram">Gurugram</option>
                <option value="Chennai">Chennai</option>
                <option value="Noida">Noida</option>
              </select>
            </div>
          </div>
        </div>

        <div class="bg-[#f8f8f8] w-full">
          <div class="flex justify-center mt-8">
            <div>
              <div class="flex justify-center items-center text-[25px] font-bold mt-2">
                {filtereddatas.length} Total Internships
              </div>
              <div class=" flex justify-center gap-1 text-[17px] font-semibold">
                Latest Summer Internships in
                <span class="text-[#2b9fe2]"> India</span>
              </div>
            </div>
          </div>

          <ul class="flex flex-wrap justify-center gap-12 mt-9 pb-12">
            {filtereddatas.map((data) => {
              return (
                <li key={data.id}>
                  <div class="rounded-3xl bg-white p-6 w-[282px]">
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
                        <Link
                          class="flex gap-1 items-center text-[#1da0ed] text-base font-medium"
                          to={`/internshipdetail/${data.id}`}
                        >
                          View details <IoIosArrowForward />{" "}
                        </Link>
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Internship;
