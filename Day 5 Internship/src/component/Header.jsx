import { IoHandLeft } from "react-icons/io5";
import { FaFire } from "react-icons/fa6";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

function Header() {
  return (
    <>
    <div class="border-b-2 border-gray-300 pt-5"></div>
    <div class="flex justify-center mt-12">
    <div  >
      <div class="flex justify-center items-center text-[28px] font-bold" >
        Hi, Nidhi Singh! <span class="text-[#ffdc5d]"><IoHandLeft /></span>
        </div>
        <div class="text-[22px] text-gray-500">Let’s help you land your dream career</div>

        <div class="flex justify-center items-center text-[25px] font-bold mt-[49px]" >Trending on Internshala <span class="text-[#ff6723]"> <FaFire /></span></div>
      </div>

        
      </div>
      <div class="flex justify-center gap-6 mt-9">
        <img class="w-[26%] h-[278px]" src="https://internshala.com/static/images/tgs/homepage_trending/pgc/DIGITAL_MARKETING_course_v4.png" alt="" srcset="" /> 
        <img class="w-[26%] h-[278px]" src="https://internshala-uploads.internshala.com/banner-images/home_new/stt_col999_may25-student.png.webp" alt="" srcset="" />
        <img class="w-[26%] h-[278px]" src="https://internshala-uploads.internshala.com/banner-images/home_new/pep_sales_star_2025-student.png.webp" alt="" srcset="" />
        </div>

        <div class="flex justify-center items-center gap-3 m-[60px] text-[40px] text-[#BBB] font-thin"><TfiArrowCircleLeft />
        <div class="h-1 w-[120px] bg-[#EEE] rounded-full"> <div class="h-1 w-[90px] bg-[#008bdc] rounded-full"></div></div>
        <TfiArrowCircleRight />
        </div>
      </>
  );
}

export default Header;
