import logo from "../assets/image 8.png";
export default function Header() {
  return (
    <header className="w-full bg-[#2C355E] flex justify-center items-center ">
      <img src={logo} alt="" className="w-15 lg:w-[100px] " />
      <h1 className="text-white text-[20px] ml-1 tracking-wide lg:text-4xl lg:ml-3 font-sanf text-center">
        RENU SHARMA FOUNDATION
      </h1>
    </header>
  );
}
