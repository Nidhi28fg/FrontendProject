import Certification from "../component/Certification";
import Placement from "../component/Placement";
import Navbar from "../component/Navbar";

function AboutUs() {
  return (
    <div> 
        <Navbar/>
          <div class="border-b-2 border-gray-300 pt-5"></div>
    <Placement/>
    <Certification/>
    </div>
  );
}

export default AboutUs;
