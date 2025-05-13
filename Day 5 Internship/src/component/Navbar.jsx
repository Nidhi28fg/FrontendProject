import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineArrowDropDown } from "react-icons/md";




function Navbar() {
  return (
    <div class="flex justify-center">
      <div class="flex justify-between w-[1200px] items-center mt-5">
        <div>
          <img class="w-[117px]" src="https://upload.wikimedia.org/wikipedia/en/8/8b/Internshala_company_logo.png?20180309195846" alt="Internshala logo" />
        </div>
        <div>
          <ul class="flex gap-[22px] items-center">
            <li class="flex items-center">Intenships <span class="text-[28px]"><MdOutlineArrowDropDown /></span> </li>
            <li class="flex items-center gap-1">
              Courses <span class="bg-[#ff8c00] text-white px-2 text-sm font-semibold uppercase rounded-sm" >Offer</span><span class="text-[28px]"><MdOutlineArrowDropDown /></span>
            </li>
            <li class="flex items-center">Jobs <span class="text-[28px]"><MdOutlineArrowDropDown /></span></li>
            <li class="text-[23px] text-gray-500">
              <IoChatboxEllipsesOutline />
            </li>
            <li class="flex items-center text-[23px] text-gray-500">
              <CgProfile /> <span class="text-[28px]"><MdOutlineArrowDropDown /></span>
            </li>
          </ul>
        </div>
      </div>


    </div>
  );
}

export default Navbar;
