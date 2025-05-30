import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Navbar from "../component/Navbar";


function Login() {
  return (
    <div> <Navbar/>
    <div class="border-b-2 border-gray-300 pt-5"></div>
    <div class="flex justify-center items-center h-[850px] ">
      <div class="bg-[#48b5a7] text-white h-[850px] flex flex-col justify-center items-center text-center w-[50%] px-8">
        <h2 class="text-[80px] font-bold">New Here?</h2>
        <p class="text-[25px] w-[325px]">Sign up and discover a great amount of new opportunities</p>
        
        <button class="p-4 text-[#48b5a7] w-50 m-12 font-bold text-xl rounded-3xl bg-white">Sign Up</button>
        <p>---------------or-----------------</p>
        <div class="flex justify-center mt-3 text-2xl text-white gap-[20px]">< FaFacebook/> <FaLinkedin/> <FaGoogle/> <FaInstagram/> </div>
      </div>
      <div class="bg-white flex flex-col justify-center items-center h-[850px] rounded-3xl text-center w-[50%] mr-8 px-8">
        <div class="py-8">
          <h2 class="text-[40px] font-bold my-8">LogIn to Your Account</h2>
          <p class="text-[20px]">Login using social networks</p>
          <div class="flex justify-center mt-3 text-2xl text-[#48b5a7] gap-[20px]">< FaFacebook/> <FaLinkedin/> <FaGoogle/> <FaInstagram/> </div>
        
        </div>
        <p>---------------or-----------------</p>
        <form class="">
          <input class='py-4 text-center bg-[#48b5a7] w-100 my-4 text-lg rounded-xl text-white font-bold shadow-[-9px_7px_20px_4px_powderblue]' placeholder="Enter Your Name" />
          <br />
          <input class='py-4 text-center bg-[#48b5a7] w-100 my-4 text-lg rounded-xl text-white font-bold shadow-[-9px_7px_20px_4px_powderblue]' placeholder="Enter Your Password" />
          <br />
          <button class="p-4 bg-[#48b5a7] w-50 my-12 font-bold text-xl rounded-3xl text-white shadow-[-9px_7px_20px_4px_powderblue]">Sing in</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
