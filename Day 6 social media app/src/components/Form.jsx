function Form() {
    return ( 
    
    <div>
        <div className="p-3 bg-black text-white">
  <form>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="block text-sm font-medium text-gray-300">Email address</label>
      <input type="email" className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="mt-1 text-xs text-gray-400">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="block text-sm font-medium text-gray-300">Password</label>
      <input type="password" className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 flex items-center">
      <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-600 rounded focus:ring-blue-500" id="exampleCheck1"/>
      <label className="ml-2 block text-sm text-gray-300" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
  </form>
</div>

    </div>
    )
}

export default Form;