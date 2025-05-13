import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

function Certification() {
  return (
    <div class="bg-[#f0fbff]">
      <div class="flex justify-center mt-4">
        <div>
          <div class="flex justify-center items-center text-[25px] font-bold mt-[49px]">
            Certification courses for you
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-6 mt-9 pb-12">
        <div class="rounded-xl w-[280px] border border-[#dedede]">
          <img src="https://training-comp-uploads.internshala.com/homepage/media/courses_section/card_images/web-development.png" /> <div class="px-4">
            <div class="flex gap-2 items-center text-gray-500 font-semibold mt-[17px]">
            8 weeks
          </div>
          <div class="mt-3 text-lg font-semibold mb-2">Web Development</div>
        
          <div class="flex gap-2 items-center text-gray-500 mt-[17px]">
            {" "}
            <span class="text-[20px] text-[#ffae00]">
            <FaStar />
            </span>{" "}
            4.1  |  121989 learners
          </div>
          
          <div class="flex gap-1 items-center text-[#1da0ed] text-base font-medium mt-4 mb-4">
                Know more{" "} <IoIosArrowForward />
          </div>
          </div>
        </div>
        <div class="rounded-xl w-[280px] border border-[#dedede]">
          <img src="https://training-comp-uploads.internshala.com/homepage/media/courses_section/card_images/excel.png" />
          <div class="px-4">
            <div class="flex gap-2 items-center text-gray-500 font-semibold mt-[17px]">
            8 weeks
          </div>
          <div class="mt-3 text-lg font-semibold mb-2">Advanced Excel</div>
        
          <div class="flex gap-2 items-center text-gray-500 mt-[17px]">
            {" "}
            <span class="text-[20px] text-[#ffae00]">
            <FaStar />
            </span>{" "}
            4.4  |  121989 learners
          </div>
          
          <div class="flex gap-1 items-center text-[#1da0ed] text-base font-medium mt-4 mb-4">
                Know more{" "} <IoIosArrowForward />
          </div>
          </div>
        </div>
        <div class="rounded-xl w-[280px] border border-[#dedede]">
          <img src="https://training-comp-uploads.internshala.com/homepage/media/courses_section/card_images/business-analytics.png" />
          <div class="px-4">
            <div class="flex gap-2 items-center text-gray-500 font-semibold mt-[17px]">
            8 weeks
          </div>
          <div class="mt-3 text-lg font-semibold mb-2">Business Analytics</div>
        
          <div class="flex gap-2 items-center text-gray-500 mt-[17px]">
            {" "}
            <span class="text-[20px] text-[#ffae00]">
            <FaStar />
            </span>{" "}
            4.2  |  121989 learners
          </div>
          
          <div class="flex gap-1 items-center text-[#1da0ed] text-base font-medium mt-4 mb-4">
                Know more{" "} <IoIosArrowForward />
          </div>
          </div>
        </div>
        <div class="rounded-xl w-[280px] border border-[#dedede]">
         <img src="https://training-comp-uploads.internshala.com/homepage/media/courses_section/card_images/stock-market-trading.png" />
        <div class="px-4">
            <div class="flex gap-2 items-center text-gray-500 font-semibold mt-[17px]">
            8 weeks
          </div>
          <div class="mt-3 text-lg font-semibold mb-2">Stock Market Trading</div>
        
          <div class="flex gap-2 items-center text-gray-500 mt-[17px]">
            {" "}
            <span class="text-[20px] text-[#ffae00]">
            <FaStar />
            </span>{" "}
            4  |  121989 learners
          </div>
          
          <div class="flex gap-1 items-center text-[#1da0ed] text-base font-medium mt-4 mb-4">
                Know more{" "} <IoIosArrowForward />
          </div>
          </div>
        </div>
        

        
      </div>
      <div class="flex justify-center items-center gap-3 pb-[50px] text-[40px] text-[#BBB] font-thin"><TfiArrowCircleLeft />
              <div class="h-1 w-[120px] bg-[#EEE] rounded-full"> <div class="h-1 w-[90px] bg-[#008bdc] rounded-full"></div></div>
              <TfiArrowCircleRight />
              </div>
    </div>
  );
}

export default Certification;
