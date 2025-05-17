import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { FaStarHalf } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";

function Testimonials() {
  return (
    <div>
      <div class="flex justify-center mt-4">
        <div>
          <div class="flex justify-center items-center text-[25px] font-bold mt-[49px]">
            Testimonials
          </div>
          <div class="flex justify-center text-center text-[15px] w-[600px] mt-[9px]">
            Our approach thrives at the intersection between data-driven market
            research and traditional management consultancies.
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-6 mt-9 pb-12">
        <div class=" flex flex-col justify-center items-center text-center rounded-xl w-[300px] border border-[#dedede] py-4 ">
          <img
            class="rounded-full h-[150px] w-[150px]"
            src="data:image/jpeg;base64,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"
          />
          <div class="px-4">
            <div class=" text-gray-500 font-semibold mt-[17px]">
              Web Designer
            </div>
            <div class="mt-3 text-lg font-semibold mb-2">Sanju Jaiswal</div>

              <div class="flex gap-2 justify-center text-gray-500 mt-[17px]">
              {" "}
              <span class=" flex gap-1 text-[20px] text-[#ffae00]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> <FaStar />
              </span>{" "}
              5
            </div>
            <p class="text-gray-500 text-sm" py-2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              ducimus consequatur? Est debitis explicabo officia, reprehenderit
              error molestias .....
            </p>

           <div class="flex gap-1 justify-center text-[#1da0ed] text-base font-medium mt-4 mb-4">
              Read More <IoIosArrowForward />
            </div>
          </div>
        </div>
         <div class=" flex flex-col justify-center items-center text-center rounded-xl w-[300px] border border-[#dedede] py-4  ">
          <img class="rounded-full h-[150px] w-[150px]" src="data:image/jpeg;base64,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" />
          <div class="px-4">
            <div class="text-gray-500 font-semibold mt-[17px]">
              App Developer
            </div>
            <div class="mt-3 text-lg font-semibold mb-2">Anita Sharma</div>

            <div class="flex gap-2 justify-center text-gray-500 mt-[17px]">
              {" "}
              <span class=" flex gap-1 text-[20px] text-[#ffae00]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> <FaStarHalf />
              </span>{" "}
              4.5
            </div>
            <p class="text-gray-500 text-sm" py-2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              ducimus consequatur? Est debitis explicabo officia, reprehenderit
              error molestias .....
            </p>

            <div class="flex gap-1 justify-center text-[#1da0ed] text-base font-medium mt-4 mb-4">
              Read More <IoIosArrowForward />
            </div>
          </div>
        </div>
     <div class=" flex flex-col justify-center items-center text-center rounded-xl w-[300px] border border-[#dedede] py-4  ">
          <img class="rounded-full h-[150px] w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUqXzInuhRZJyYboffPQOlrigTX1pWXVioA&s" />
          <div class="px-4">
           <div class=" text-gray-500 font-semibold mt-[17px]">
              Fontend Developer
            </div>
            <div class="mt-3 text-lg font-semibold mb-2">Shakshi Garg</div>

          <div class="flex gap-2 justify-center text-gray-500 mt-[17px]">
              {" "}
              <span class=" flex gap-1 text-[20px] text-[#ffae00]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> <FaStarHalf />
              </span>{" "}
              4.5
            </div>
          <p class="text-gray-500 text-sm">
 py-2              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              ducimus consequatur? Est debitis explicabo officia, reprehenderit
              error molestias .....
            </p>

           <div class="flex gap-1 justify-center text-[#1da0ed] text-base font-medium mt-4 mb-4">
              Read More <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div class=" flex flex-col justify-center items-center text-center rounded-xl w-[300px] border border-[#dedede] py-4  ">
          <img
            class="rounded-full h-[150px] w-[150px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShY1PfL7FzOjw7QU04gjVhBUcRdOpGRzCMfw&s"
          />
          <div class="px-4">
            <div class=" text-gray-500 font-semibold mt-[17px]">
              Backend Developer
            </div>
            <div class="mt-3 text-lg font-semibold mb-2">Arman Malik</div>

            <div class="flex gap-2 justify-center text-gray-500 mt-[17px]">
              {" "}
              <span class=" flex gap-1 text-[20px] text-[#ffae00]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>{" "}
              4.2
            </div>
             <p class="text-gray-500 text-sm py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              ducimus consequatur? Est debitis explicabo officia, reprehenderit
              error molestias .....
            </p>

            <div class="flex gap-1 justify-center text-[#1da0ed] text-base font-medium mt-4 mb-4">
              Read More <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center gap-3 pb-[50px] text-[40px] text-[#BBB] font-thin">
        <TfiArrowCircleLeft />
        <div class="h-1 w-[120px] bg-[#EEE] rounded-full">
          {" "}
          <div class="h-1 w-[90px] bg-[#008bdc] rounded-full"></div>
        </div>
        <TfiArrowCircleRight />
      </div>
    </div>
  );
}

export default Testimonials;
