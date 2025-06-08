import React, { useState } from 'react';

function Sidebar({selectedTab, setSelectedTab}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOnClick = (tabName) => {
        setSelectedTab(tabName);
    }

  return (
    <div className="flex flex-col flex-shrink-0 p-4 text-white bg-gray-800 h-3/4" style={{ width: '280px' }}>
      <a href="#" className="flex items-center mb-3 md:mb-0 mr-auto text-white no-underline">
        {/* You can replace this with an actual SVG icon or a component */}
        {/* <svg className="bi pe-none mr-2 w-10 h-8" aria-hidden="true"><use xlinkHref="#bootstrap"></use></svg> */}
        <span className="text-4xl text-center">Socail Media Posts</span>
      </a>
      <hr className="my-3 border-gray-700" />
      <ul className="flex-col">
        <li onClick={() => {handleOnClick("Home")}}>
          <a href="#" className={`block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-400 rounded ${selectedTab === 'Home' && 'bg-blue-600'}`}> {/* Added block, px, py, and rounded for better styling */}
            {/* You can replace this with an actual SVG icon or a component */}
            {/* <svg className="bi pe-none mr-2 w-4 h-4" aria-hidden="true"><use xlinkHref="#home"></use></svg> */}
            Home
          </a>
        </li>
        <li onClick={() => {handleOnClick("Dashboard")}}>
          <a href="#" className={`block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-400 rounded ${selectedTab === 'Dashboard' && 'bg-blue-600'}`}> {/* Added block, px, py, and rounded */}
            {/* <svg className="bi pe-none mr-2 w-4 h-4" aria-hidden="true"><use xlinkHref="#speedometer2"></use></svg> */}
            Dashboard
          </a>
        </li>
        <li onClick={() => {handleOnClick("Orders")}}>
          <a href="#" className={`block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-400 rounded ${selectedTab === 'Orders' && 'bg-blue-600'}`}> {/* Added block, px, py, and rounded */}
            {/* <svg className="bi pe-none mr-2 w-4 h-4" aria-hidden="true"><use xlinkHref="#table"></use></svg> */}
            Orders
          </a>
        </li>
        <li onClick={() => {handleOnClick("Products")}}>
          <a href="#" className={`block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-400 rounded ${selectedTab === 'Products' && 'bg-blue-600'}`}> {/* Added block, px, py, and rounded */}
            {/* <svg className="bi pe-none mr-2 w-4 h-4" aria-hidden="true"><use xlinkHref="#grid"></use></svg> */}
            Products
          </a>
        </li>
        <li onClick={() => {handleOnClick("Customers")}}>
          <a href="#" className={`block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-400 rounded ${selectedTab === 'Customers' && 'bg-blue-600'}`}> {/* Added block, px, py, and rounded */}
            {/* <svg className="bi pe-none mr-2 w-4 h-4" aria-hidden="true"><use xlinkHref="#people-circle"></use></svg> */}
            Customers
          </a>
        </li>
      </ul>
      <hr className="my-3 border-gray-700" />
      <div className="relative mt-auto"> {/* Added relative and mt-auto for bottom alignment */}
        <a
          href="#"
          className="flex items-center text-white no-underline cursor-pointer"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            setDropdownOpen(!dropdownOpen);
          }}
        >
          <img src="https://github.com/mdo.png" alt="User avatar" className="rounded-full mr-2 w-8 h-8" />
          <strong>mdo</strong>
        </a>
        <ul
          className={`absolute bottom-full left-0 mb-2 w-48 bg-gray-800 rounded-md py-1 shadow-lg z-10 ${
            dropdownOpen ? 'block' : 'hidden'
          }`}
        >
          <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">New project...</a></li>
          <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">Settings</a></li>
          <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">Profile</a></li>
          <li><hr className="border-gray-700 my-1" /></li>
          <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;