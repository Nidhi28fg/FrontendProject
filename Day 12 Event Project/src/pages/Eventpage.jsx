// import './App.css'
import BackImg from "../assets/blue.jpg";
export default function Eventpage() {
  return (
    
    <div className="">
      <div className="mt-[40px] lg:mt-[80px] relative border h-52 lg:h-[60vh]  bg-white text-white flex justify-center items-center w-full">
        <img
          src={BackImg}
          alt=""
          className="w-full h-full rounded-br-[150px] lg:rounded-br-[300px] opacity-90"
        />
        <div className=" p-[4px] h-45 w-[89%] lg:w-[80%] absolute lg:h-[34vh] lg:mt-5">
          <h1 className="text-[18px] tracking-[-1px]  mt-4 font-bold text-center lg:text-[41px] lg:mt-0">
            Join Us in Making a Difference!
          </h1>
          <p className="leading-4 lg:leading-[27px] mt-3 mb-3 text-[11px] lg:text-[22px] text-center">
            Creating positive change through events that inspire, uplift, and
            empower. Each event is a step toward transforming lives and building
            stronger communities.
          </p>

          <button className="tracking-wide border text-[12px] h-9 border lg:mt-7 ml-2 p-2 rounded-full lg:w-[205px] lg:h-[80px] lg:text-[25px] absolute left-5 lg:left-[70px]">
            Get Involved
          </button>
        </div>
      </div>
      
      <h1 className="text-center m-5 lg:mt-8 font-bold text-lg text-sm lg:text-[35px]">
        Featured Upcoming Event
      </h1>

      <div className=" p-1 h-[50%] lg:h-85 bg-white text-white bg-[url(./assets/blue.jpg)] bg-size-[700px_175px] lg:bg-size-[1600px_320px] bg-no-repeat bg-cover flex justify-center items-start relative">
        <div className=" lg:mt-2 p-[3px] h-45 w-[90%] lg:w-[80%]  lg:h-[28vh] relative">
          <h1 className="text-[18px] font-bold text-center lg:text-[39px]">
            Free Health Camp & Awareness Drive
          </h1>
          <p className="mt-2 mb-3 text-[11px]  lg:text-[22px] text-center leading-4 lg:leading-[28px]">
            Join us in making healthcare accessible to all through free medical
            check-ups and health awareness <br /> sessions for underserved
            communities.
          </p>
          <button className="border text-[12px] h-9 border ml-2 p-2 mt-2 rounded-full lg:w-[220px] lg:h-[80px] lg:text-[25px] tracking-wide absolute right-5 lg:right-25 lg:top-40 top-29">
            Register Now
          </button>
          <div className="w-38 h-15 rounded-[16px] lg:rounded-[36px] lg:pl-5 shadow-xl/30 shadow-blue-500/100 p-2 lg:p-3 bg-[#E5E0D9] text-black lg:w-120 lg:h-35 flex flex-col justify-center lg:leading-10 absolute lg:top-[179px] top-[120px] ">
            <p className="text-[9px] lg:text-[19px]">
              <b> Date & Time: </b> April 15, 2025 | 10:00 AM - 4:00 PM
            </p>
            <p className="text-[9px] lg:text-[19px]">
              <b>Location: </b>
              Community Hall, Delhi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
