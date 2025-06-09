function Singuppage() {
  return (
    <div class="flex w-full">
    <div class="bg-[#041d42] text-white p-8 w-[90%]" >
      <h2>
        Welcome to <br />
        Renu Sharma Foundation !
      </h2>
      <form>
        <label class="flex flex-col gap-2" >
          Username
          <input class="border-1 rounded-xl p-2 w-[150px] h-8 text-xs" placeholder="Your username" type="text" name="username" />
        </label>
        <label class="flex flex-col gap-2">
          Fullname
          <input class="border-1 rounded-xl p-2 w-[150px] h-8 text-xs" type="text" name="fullname" />
        </label>
        <label class="flex flex-col gap-2">
          Email
          <input class="border-1 rounded-xl p-2 w-[150px] h-8 text-xs" type="email" name="email" />
        </label>
        <label class="flex flex-col gap-2">
          Create Password
          <input class="border-1 rounded-xl p-2 w-[150px] h-8 text-xs" type="password" name="createpassword" />
        </label>
        <label class="flex flex-col gap-2">
          Phone Number
          <input class="border-1 rounded-xl p-2 w-[150px] h-8 text-xs" type="number" name="phonenum" />
        </label>
        <label class="flex flex-col gap-2">
          Confirm Password
          <input class="border-1 rounded-xl p-2 w-[150px] h-8 text-xs" type="password" name="confirmpassword" />
        </label>
        <p>Gender</p>
        <label >
    Female
    <input class="mx-4" type="radio" name="gender" />
  </label>
  <label >
    Male
    <input class="mx-4" type="radio" name="gender" />
  </label>

        <label class="flex flex-col gap-2">
          College Name
          <input class="border-1 rounded-xl p-2 w-[150px] h-8 text-xs" type="text" name="fullname" />
        </label>
        <label class="flex flex-col gap-2">
          College Address
          <input class="border-1 rounded-xl p-2 w-[150px] h-8 text-xs" type="text" name="fullname" />
        </label>
         <label class="flex flex-col gap-2">
          Department
          <select class="border-1 rounded-xl p-2 w-[150px] h-8 text-xs" name="yearofstudy" id="yeat">
  <option  value="">Choose your Departnet</option>
   </select>
        </label>
         <label class="flex flex-col gap-2">
          Year of Study

         <select class="border-1 rounded-xl p-2 w-[150px] h-8 text-xs" name="yearofstudy" id="yeat">
  <option value="">Enter Current Year</option>
  <option value="1st Year">1st Year</option>
  <option value="2nd Year">2nd Year</option>
  <option value="3rd Year">3rd Year</option> </select>
        </label>

        <input type="submit" value="Sign Up" />

        <p> Already have an account? Sing in</p>
      </form>
    </div>
    <div class="bg-[#41BDC5] w-[10%]"></div>
    </div>
  );
}

export default Singuppage;
