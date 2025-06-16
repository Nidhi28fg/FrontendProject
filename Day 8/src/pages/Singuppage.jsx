import { useState } from "react";
import logo from "../assets/logo.png";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

function Singuppage() {
  const [pass, setPass] = useState(true);
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    phonenumber: "",
    fullname: "",
    password: "",
    createpassword: "",
    confirmpassword: "",
    gender: "",
    collegename: "",
    department: "",
    collegeaddress: "",
    yearofstudy: "",
  });

  const [formError, setFormError] = useState({
    username: "",
    email: "",
    phonenumber: "",
    fullname: "",
    password: "",
    createpassword: "",
    confirmpassword: "",
    gender: "",
    collegename: "",
    department: "",
    collegeaddress: "",
    yearofstudy: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });

    setFormError({
      ...formError,
      [name]: "",
    });
  };

  const myPassword = () => {
    setPass(!pass);
  }


  // Validation Logic

  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
      username: "",
      email: "",
      phonenumber: "",
      fullname: "",
      password: "",
      createpassword: "",
      confirmpassword: "",
      gender: "",
      collegename: "",
      department: "",
      collegeaddress: "",
      yearofstudy: "",
    };

    if (!formInput.username) {
      inputError.username = "please enter Username";
    }

    if (!formInput.fullname) {
      inputError.fullname = "please enter Fullname";
    }
    if (!formInput.phonenumber) {
      inputError.phonenumber = "please enter Your Phone Number";
    }
    if (!formInput.email) {
      inputError.email = "please enter your Email";
    }
    if (!formInput.createpassword) {
      inputError.createpassword = "please enter Password";
    }

    if (!formInput.confirmpassword) {
      inputError.confirmpassword = "please enter Confirm Password";
    }
    if (formInput.createpassword.trim() !== formInput.confirmpassword.trim()) {
      inputError.confirmpassword =
        "Create Password and Confirm Password should be same";
    }
    if (!formInput.gender) {
      inputError.gender = "please choose your gender";
    }
    if (!formInput.collegename) {
      inputError.collegename = "please enter your College Name";
    }
    if (!formInput.department) {
      inputError.department = "please enter your department";
    }
    if (!formInput.collegeaddress) {
      inputError.collegeaddress = "please enter College Address";
    }
    if (!formInput.yearofstudy) {
      inputError.yearofstudy = "please enter Your Year of Study";
    }
    setFormError(inputError);
  };

  return (
    <div class="flex w-full">
      <div class="bg-[#041d42] text-white pl-[89px] max-md:pl-[30px] w-[85%]">
        <img src={logo} alt="" class="max-w-[27%] h-auto sm:max-w-[14%]" />
        <h2 class="text-[50px] max-md:text-[20px]">Welcome To </h2>
        <h2 class="text-[50px] font-bold max-md:text-[20px]">
          Renu Sharma Foundation !
        </h2>

        <form onSubmit={validateFormInput}>
          <div class="flex gap-[282px] mt-[45px] max-md:gap-2 max-md:mt-4 max-md:flex-col">
            <div>
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Username
                <input
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  class="border-2 border-white p-4 text-base rounded-4xl w-72   max-sm:w-65 "
                  placeholder="Your username"
                  type="text"
                  name="username"
                  value={formInput.username}
                />
                <span className="text-red-600 text-sm">
                  {formError.username}
                </span>
              </label>
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Email
                <input
                  value={formInput.email}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  class="border-2 border-white p-4 text-base rounded-4xl w-72   max-sm:w-65"
                  type="email"
                  name="email"
                  placeholder="Your email"
                />
                {formError.email && (
                  <span className="text-red-600 text-sm">
                    {formError.email}
                  </span>
                )}
              </label>
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Phone Number
                <input
                  value={formInput.phonenumber}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  class="border-2 border-white p-4 text-base rounded-4xl w-72   max-sm:w-65"
                  type="tel"
                  name="phonenumber"
                  placeholder="Your Number"
                />
                <span className="text-red-600 text-sm">
                  {formError.phonenumber}
                </span>
              </label>
            </div>
            <div>
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Fullname
                <input
                  value={formInput.fullname}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  class="border-2 border-white p-4 text-base rounded-4xl w-[410px]   max-sm:w-65"
                  type="text"
                  name="fullname"
                  placeholder="Your Full Name"
                />
                {formError && (
                  <span className="text-red-600 text-sm">
                    {formError.fullname}
                  </span>
                )}
              </label>{" "}
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Create Password
                <input
                  value={formInput.createpassword}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  class="border-2 border-white p-4 text-base rounded-4xl w-[410px]   max-sm:w-65"
                  type= {pass ? "password" :  "text" }
                  name="createpassword"
                  placeholder="***************"
                /> 
                <span className="text-red-600 text-sm">
                  {formError.createpassword}
                </span>
              </label>{" "}
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Confirm Password
                <input
                  value={formInput.confirmpassword}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  class="border-2 border-white p-4 text-base rounded-4xl w-[410px]   max-sm:w-65"
                  type={pass ? "password" :  "text" }
                  name="confirmpassword"
                  placeholder="***************"
                />
                <span className="text-red-600 text-base">
                  {formError.confirmpassword}
                </span>
                 <span><input className="w-4 h-4" type="checkbox" onClick={myPassword}/> Show Password</span>
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
                value="male"
                checked={formInput.gender === "male"}
                onChange={({ target }) =>
                  handleUserInput(target.name, target.value)
                }
              />
            </label>
            <label class="flex items-center text-[20px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
              Female
              <input
                type="radio"
                name="gender"
                value="female"
                class="mx-4 appearance-none w-5 h-5 border-4 border-white rounded-full outline-none bg-white cursor-pointer checked:bg-[#41bdc5]"
                checked={formInput.gender === "female"}
                onChange={({ target }) =>
                  handleUserInput(target.name, target.value)
                }
              />
            </label>
          </div>
          <span className="text-red-600 text-sm">{formError.gender}</span>
          <div class="flex gap-[282px] mt-[45px] max-md:gap-2 max-md:mt-4 max-md:flex-col">
            <div>
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                College Name
                <input
                  value={formInput.collegename}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  class="border-2 border-white p-4 text-base rounded-4xl w-72   max-sm:w-65"
                  type="text"
                  name="collegename"
                  placeholder="Your College Number"
                />
                <span className="text-red-600 text-sm">
                  {formError.collegename}
                </span>
              </label>
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Department
                <div class="relative w-72 max-sm:w-65">
                  <select
                    name="department"
                    id="year"
                     value={formInput.department}
                    onChange={({ target }) => {
                      handleUserInput(target.name, target.value);
                    }} 
                    class="appearance-none flex items-center gap-[90px] max-sm:gap-[60px] border-2 border-white p-4 text-base rounded-4xl w-72 max-sm:w-65"
                  >
                    <option value="">Choose your Department</option>
                    <option value="kjdkjfkla">Choose your Department</option>
                  </select>
                  <MdOutlineArrowDropDownCircle
                    size={25}
                    class="absolute right-[21px] top-[19px]"
                  />
                  <span className="text-red-600 text-sm">
                    {formError.department}
                  </span>
                </div>
              </label>
            </div>
            <div>
              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                College Address
                <input
                  value={formInput.collegeaddress}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  class="border-2 border-white p-4 text-base rounded-4xl w-[410px]   max-sm:w-65"
                  type="text"
                  name="collegeaddress"
                  placeholder="Your College Address"
                />
                <span className="text-red-600 text-sm">
                  {formError.collegename}
                </span>
              </label>

              <label class="flex flex-col gap-2 text-[22px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Year of Study
                <div class="relative w-72 max-sm:w-65">
                  <select
                    name="yearofstudy"
                    id="year"
                     value={formInput.yearofstudy}
                    onChange={({ target }) => {
                      handleUserInput(target.name, target.value);
                    }} 
                    class="appearance-none flex items-center gap-[90px] max-sm:gap-[60px] border-2 border-white p-4 text-base rounded-4xl w-72 max-sm:w-65"
                  >
                    <option value="">Enter Current Year </option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>{" "}
                  </select>
                  <MdOutlineArrowDropDownCircle
                    size={25}
                    class="absolute right-[21px] top-[19px]"
                  />
                  <span className="text-red-600 text-sm">
                    {formError.yearofstudy}
                  </span>
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
