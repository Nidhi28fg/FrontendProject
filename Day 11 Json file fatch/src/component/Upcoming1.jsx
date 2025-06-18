import Data from "/upcomingevent.json";
import { useState } from "react";

function Upcoming() {
  const [filters, setFilters] = useState({
    location: "",
    eventtype: "",
    daterange: "",
  });

  const [data, setData] = useState(Data);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    console.log(`Name ${name}`);
    console.log(`value ${value}`);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const dateShort = () => {
    const shortdate = filtereddatas.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB; 
      });
    setData(shortdate);
  };

  const filtereddatas = data.filter((eventupcoming) => {
    const eventDate = new Date(eventupcoming.date);
    const filterDate = new Date(filters.daterange);
    // console.log(eventDate);
    // console.log(filterDate);
    return (
      (filters.location === "" ||
        eventupcoming.location === filters.location) &&
      (filters.eventtype === "" || eventupcoming.type === filters.eventtype) &&
      (filters.daterange === "" ||
        (eventDate.getMonth() > filterDate.getMonth() &&
          eventDate.getDate() <= filterDate.getDate()) ||
        (eventDate.getMonth() == filterDate.getMonth() &&
          eventDate.getDate() >= filterDate.getDate()))
    );
  });

  return (
    <div className="flex flex-col justify-center items-center p-2">
      <h2 className="text-[43px] font-bold max-sm:text-[25px]">
        Upcoming Events
      </h2>
      <p className="text-[23px] mt-2.5 mb-[42px] max-sm:text-sm text-center  max-sm:mt-2.5  max-sm:m-[37px]">
        Join us for these exciting opportunities to make a difference in your
        community.
      </p>
      <div className="flex justify-center max-sm:flex-col">
        <div className="flex flex-wrap justify-center w-[860px] max-sm:w-full">
          <ul className="flex flex-wrap justify-center">
            {filtereddatas.map((eventupcoming) => {
              return (
                <li
                  key={eventupcoming.id}
                  className="flex flex-col flex-wrap mx-3 max-sm:mx-3 "
                >
                  <img
                    className="w-[387px] h-[282px] object-cover max-sm:w-[169px] max-sm:h-[91px]"
                    src={eventupcoming.img}
                    alt=""
                  />
                  <p className="font-bold mt-[27px] max-sm:mt-2.5">
                    {eventupcoming.type}
                  </p>
                  <p>{eventupcoming.date}</p>
                  <p>{eventupcoming.time}</p>
                  <p>{eventupcoming.location}</p>
                  <button className="w-[120px] bg-[#1d1d52] text-[white] p-1 mt-[11px] mb-[78px] max-sm:mb-10 rounded-[7px]">
                    {eventupcoming.button_text}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="flex flex-col bg-[#ced2df] w-[506px] max-sm:w-[380px] shadow-[1px_3px_15px_3px_#8c8cb4] rounded-[9px] p-9 h-[491px]">
            <p className="font-semibold mb-[27px]">Filter & Sort Events</p>
            <div className="flex flex-wrap justify-center gap-5 max-sm:gap-1">
              <button
                className="bg-[#1d1d52] text-[white] p-1 px-5 rounded-[7px]"
                name="eventtype"
                value="Medical Assistance Camp"
                onClick={handleFilterChange}
              >
                Health
              </button>
              <button
                className="bg-[#1d1d52] text-[white] p-1 px-5 rounded-[7px]"
                name="eventtype"
                value="Education Workshop"
                onClick={handleFilterChange}
              >
                Education
              </button>
              <button
                className="bg-[#1d1d52] text-[white] p-1 px-5 rounded-[7px]"
                name="eventtype"
                value="Tree Plantation Drive"
                onClick={handleFilterChange}
              >
                Environmental
              </button>
              <button
                className="bg-[#1d1d52] text-[white] p-1 px-5 rounded-[7px]"
                name="eventtype"
                value="Animal"
                onClick={handleFilterChange}
              >
                Animal Welfare
              </button>
            </div>
            <label className="max-sm:mt-2">Location</label>
            <select
              className="bg-[white] text-black mt-2.5 mb-[30px] p-[7px]"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
            >
              <option value="">All Location</option>
              <option value="Online Event">Online </option>
              <option value="Offline Event">In Person</option>
            </select>
            <label>Event Type</label>
            <select
              className="bg-[white] mt-2.5 mb-[30px] p-[7px]"
              name="eventtype"
              value={filters.eventtype}
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              <option value="Education Workshop">Education Workshop</option>
              <option value="Medical Assistance Camp">
                Medical Assistance Camp
              </option>
              <option value="Tree Plantation Drive">
                Tree Plantation Drive
              </option>
            </select>
            <label>Date Range</label>
            <input
              className="bg-[white] mt-2.5 mb-[30px] p-[7px]"
              type="date"
              id="date"
              name="daterange"
              onChange={handleFilterChange}
            />
          </div>
          <div>
            {" "}
            <p>Sort By :</p>
            <select
            onChange={dateShort} >
              <option value="">Date (Earliest First) </option>
              <option value="sortbydate" >
                Date (Latest First)
              </option>
              <option value="sortbyname">Event Name A_Z</option>
              <option value="Location">Location</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
