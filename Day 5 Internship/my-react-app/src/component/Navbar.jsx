import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


function Navbar() {
  

  return (
    <div class="flex justify-space-between">
     <div>
        <img src="https://internshala.com/" alt="Internshala logo" />
     </div>
<div>
    <ul><li>Intenship</li>
    <li>Courses <span>Offer</span></li>
    <li>Jobs</li>
    <li><IoChatboxEllipsesOutline /></li>
    <li><CgProfile /></li></ul>
</div>
    </div>
  )
}

export default Navbar
