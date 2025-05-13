import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

import { FiTwitter, FiYoutube } from "react-icons/fi";
function Footer() {
  return (
    <div class="bg-[#333333] text-[white]">
      <div class="flex justify-center">
        <div class="flex my-[50px] gap-[73px]">
          <div>
            <ul class="flex flex-col gap-1">
              <li class="font-bold mb-4">Internship by places</li>
              <li>Intenship in India</li>
              <li>Intenship in Delhi</li>
              <li>Intenship in Bangalore</li>
              <li>Intenship in Hyderabad</li>
              <li>Intenship in Mumbai</li>
              <li>Intenship in Chennai</li>
              <li>Internship in Gurgoan</li>
              <li>Internship in Kolkota</li>
              <li>Virtual Internship</li>
              <li>View all internships</li>
            </ul>
          </div>
          <div>
            <ul class="flex flex-col gap-1">
              <li class="font-bold mb-4">Internship by Stream</li>
              <li>Computer Science Internship</li>
              <li>Electronics Internship</li>
              <li>Mechanical Internship</li>
              <li>Civil Internship</li>
              <li>Marketing Internship</li>
              <li>Chemical Internship</li>
              <li>Finance Internship</li>
              <li>Summer Research Fellowship</li>
              <li>Campus Ambassador Program</li>
              <li>View all internships</li>
            </ul>
          </div>
          <div>
            <ul class="flex flex-col gap-1">
              <li class="font-bold mb-4">Job by Places</li>
              <li>Job in Delhi</li>
              <li>Job in Mumbai</li>
              <li>Job in Bangalore</li>
              <li>Job in Jaipur</li>
              <li>Job in Kolkata</li>
              <li>Job in Hyderabad</li>
              <li>Job in Pune</li>
              <li>Job in Chennai</li>
              <li>Job in Lucknow</li>
              <li>View all jobs</li>
            </ul>
          </div>
          <div>
            <ul class="flex flex-col gap-1">
              <li class="font-bold mb-4">Job by Stream</li>
              <li>Marketing jobs</li>
              <li>Content writing jobs</li>
              <li>Sales jobs</li>
              <li>Finance jobs</li>
              <li>Digital Marketing jobs</li>
              <li>Computer Science jobs</li>
              <li>Graphic Design jobs</li>
              <li>Data Science jobs</li>
              <li>Sales jobs</li>
              <li>View all jobs</li>
            </ul>
          </div>
          <div>
            <ul class="flex flex-col gap-1">
              <li class="font-bold mb-4">Placement Guarantee Courses</li>
              <li>Digital Marketing Course</li>
              <li>Human Resource Management Course</li>
              <li>Product Management Course</li>
              <li class="font-bold my-6">
                {" "}
                Certification Courses{" "}
                <span class="bg-[#ff8c00] text-white px-2 text-sm font-semibold uppercase rounded-sm" >Offer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        {" "}
        <div class="border-b-1 border-[white] w-[1240px]"></div>
      </div>
      <div class=" flex px-[150px]">
        <div class="flex my-[50px] gap-[80px]">
          <div>
            <ul class="flex flex-col gap-1">
              <li>About us</li>
              <li>We're hiring</li>
              <li>Hire intern for your company</li>
              <li>Post a Job</li>
            </ul>
          </div>
          <div>
            <ul class="flex flex-col gap-1">
              <li>Team Dairy</li>
              <li>Blog</li>
              <li>Our Services</li>
            </ul>
          </div>
          <div>
            <ul class="flex flex-col gap-1">
              <li>Teams & Conditions</li>
              <li>Privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <ul class="flex flex-col gap-1">
              <li>Sitemap</li>
              <li>College TPO registration</li>
              <li>List of Companies</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex justify-between  py-10 px-[120px]">
        <div class="flex items-center gap-6" ><img class="w-[130px] h-[40px]" src="https://internshala.com//static/images/footer/google_play_store.png"  />
        <img class="w-[130px]  h-[40px]" src="https://internshala.com//static/images/footer/apple_app_store.png"  />
        
        <FaInstagram />
        < FiTwitter/>
        < FaFacebook/>
        < FiYoutube/>

        </div>
        <div>
          <div>© Copyright 2025 Internshala</div>
          <div>(Scholiverse Educare Private Limited)</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
