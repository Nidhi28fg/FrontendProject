import logo from "../assets/logo.png";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

function Singuppage() {
  return (
    <div class="flex w-full">
      <div class="bg-[#041d42] text-white pl-[89px] max-md:pl-[30px] w-[85%]">
        <img src={logo} alt="" class="max-w-[27%] h-auto sm:max-w-[14%]" />
        <h2 class="text-[50px] max-md:text-[20px]">Welcome To </h2>
        <h2 class="text-[50px] font-bold max-md:text-[20px]">
          Renu Sharma Foundation !
        </h2>

        <form>
          <div class="flex gap-[282px] mt-[45px] max-md:gap-2 max-md:mt-4 max-md:flex-col">
            <div>
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Username
                <input
                  class="border-2 border-white p-4 text-base rounded-4xl w-72   max-sm:w-65 "
                  placeholder="Your username"
                  type="text"
                  name="username"
                />
              </label>
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Email
                <input
                  class="border-2 border-white p-4 text-base rounded-4xl w-72   max-sm:w-65"
                  type="email"
                  name="email"
                  placeholder="Your email"
                />
              </label>
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Phone Number
                <input
                  class="border-2 border-white p-4 text-base rounded-4xl w-72   max-sm:w-65"
                  type="tel"
                  name="phonenum"
                  placeholder="Your Number"
                />
              </label>
            </div>
            <div>
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Fullname
                <input
                  class="border-2 border-white p-4 text-base rounded-4xl w-[410px]   max-sm:w-65"
                  type="text"
                  name="fullname"
                  placeholder="Your Full Name"
                />
              </label>{" "}
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Create Password
                <input
                  class="border-2 border-white p-4 text-base rounded-4xl w-[410px]   max-sm:w-65"
                  type="password"
                  name="createpassword"
                  placeholder="***************"
                />
              </label>{" "}
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Confirm Password
                <input
                  class="border-2 border-white p-4 text-base rounded-4xl w-[410px]   max-sm:w-65"
                  type="password"
                  name="confirmpassword"
                  placeholder="***************"
                />
              </label>
            </div>
          </div>

          <p class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
            Gender
          </p>
          <div class="flex">
            <label class="flex items-center text-[20px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
              Male
              <input
                class="mx-4 appearance-none w-5 h-5 border-4 border-white rounded-full outline-none bg-white cursor-pointer checked:bg-[#41bdc5]"
                type="radio"
                name="gender"
              />
            </label>
            <label class="flex items-center text-[20px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
              Female
              <input
                type="radio"
                name="gender"
                class="mx-4 appearance-none w-5 h-5 border-4 border-white rounded-full outline-none bg-white cursor-pointer checked:bg-[#41bdc5]"
              />
            </label>
          </div>
          <div class="flex gap-[282px] mt-[45px] max-md:gap-2 max-md:mt-4 max-md:flex-col">
            <div>
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                College Name
                <input
                  class="border-2 border-white p-4 text-base rounded-4xl w-72   max-sm:w-65"
                  type="text"
                  name="fullname"
                  placeholder="Your College Number"
                />
              </label>
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Department
                <div class="relative w-72 max-sm:w-65"><select name="yearofstudy" id="year" class="appearance-none flex items-center gap-[90px] max-sm:gap-[60px] border-2 border-white p-4 text-base rounded-4xl w-72 max-sm:w-65">
                
                    <option value="">Choose your Department</option> 
                    <option value="kjdkjfkla">Choose your Department</option> 
                  </select><MdOutlineArrowDropDownCircle size={25} class="absolute right-[21px] top-[19px]"/>
                </div>
              </label>
            </div>
            <div>
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                College Address
                <input
                  class="border-2 border-white p-4 text-base rounded-4xl w-[410px]   max-sm:w-65"
                  type="text"
                  name="fullname"
                  placeholder="Your College Address"
                />
              </label>
              
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Year of Study
                <div class="relative w-72 max-sm:w-65">
                  <select name="yearofstudy" id="year" class="appearance-none flex items-center gap-[90px] max-sm:gap-[60px] border-2 border-white p-4 text-base rounded-4xl w-72 max-sm:w-65">
                     <option value="">Enter Current Year </option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>{" "}
                 </select><MdOutlineArrowDropDownCircle size={25} class="absolute right-[21px] top-[19px]"/>
                </div>
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Sign Up"
            class="border-2 border-white text-black bg-white w-[500px] h-[84px] rounded-[38px] text-[34px] font-bold mt-7 mb-[72px]
            max-sm:w-[289px] max-sm:h-[60px] max-sm:text-[19px] max-sm:mt-[17px] max-sm:mb-[37px]"
          />

          <p class="mb-[161px] text-[17px] text-[#e1e1e1] ml-[25px] max-w-[400px]:mb-[51px] max-w-[400px]:ml-0">
            {" "}
            Already have an account? <span class="text-[#41BDC5]">Sing in</span>
          </p>
        </form>
      </div>
      <div class="bg-[#41BDC5] w-[15%]"></div>
    </div>
  );
}

export default Singuppage;
