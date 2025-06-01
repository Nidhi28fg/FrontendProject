import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="flex justify-center">
      <div class="flex justify-between w-[1200px] items-center mt-5">
        <div>
          <img
            class="w-[117px]"
            src="https://upload.wikimedia.org/wikipedia/en/8/8b/Internshala_company_logo.png?20180309195846"
            alt="Internshala logo"
          />
        </div>
        <div>
          <ul class="flex gap-[30px] items-center">
            <li>
              <Link class="flex items-center" to="/">
                Home <span class="text-[28px]"></span>{" "}
              </Link>
            </li>
            <li class="flex items-center">
              About Us
            </li>
            <li>
              {" "}
              <Link class="flex items-center" to="/internship">
                Intenships{" "}
                <span class="text-[28px]">
                  <MdOutlineArrowDropDown />
                </span>{" "}
              </Link>
            </li>
            <li class="flex items-center gap-1">
              <Link class="flex items-center" to="/course">
                Courses{" "}
                <span class="bg-[#ff8c00] text-white px-1 mx-1 text-sm font-semibold uppercase rounded-sm">
                  Offer
                </span>
                <span class="text-[28px]">
                  <MdOutlineArrowDropDown />
                </span>
              </Link>
            </li>

            <li>
              <Link to="/login" class="flex items-center">
                {" "}
                Login/SignUp{" "}
                <span class="flex items-center text-[23px] px-2 text-gray-500">
                  <CgProfile />{" "}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-b-2 border-gray-300 pt-5"></div>
    </div>
  );
}

export default Navbar;
