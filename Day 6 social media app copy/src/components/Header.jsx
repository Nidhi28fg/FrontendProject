function Header() {
    return <>
    
    <header className="bg-gray-800 p-3">
  <div className="mx-auto">
    <div className="flex flex-wrap items-center justify-center lg:justify-start">
      <a href="/" className="flex items-center mb-2 lg:mb-0 text-white text-decoration-none">
        <svg className="h-8 w-10 mr-2" role="img" aria-label="Bootstrap">
          {/* <use xlink:href="#bootstrap"></use> */}
        </svg>
      </a>
      <ul className="nav flex flex-col lg:flex-row col-12 lg:col-auto me-lg-auto mb-2 justify-center mb-md-0">
        <li><a href="#" className="nav-link px-2 text-gray-400 hover:text-white">Home</a></li>
        <li><a href="#" className="nav-link px-2 text-white hover:text-gray-400">Features</a></li>
        <li><a href="#" className="nav-link px-2 text-white hover:text-gray-400">Pricing</a></li>
        <li><a href="#" className="nav-link px-2 text-white hover:text-gray-400">FAQs</a></li>
        <li><a href="#" className="nav-link px-2 text-white hover:text-gray-400">About</a></li>
      </ul>
      <form className="w-full lg:w-auto mb-3 lg:mb-0 lg:mr-3" role="search">
        <input type="search" className="form-control bg-gray-700 text-white placeholder-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Search..." aria-label="Search"/>
      </form>
      <div className="text-end mt-3 lg:mt-0">
        <button type="button" className="btn border border-white text-white px-4 py-2 rounded-md mr-2 hover:bg-white hover:text-gray-800 transition duration-300">Login</button>
        <button type="button" className="btn bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300">Sign-up</button>
      </div>
    </div>
  </div>
</header>
    </>
    
}

export default Header;