import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (

    <PostListProvider>
    <div className="flex h-screen">
      <div>
        {" "}
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} /> 
        {/* pops */}
      </div>
      <div className="w-full h-screen">
        <Header />
        { selectedTab === "Home" ? (<PostList/>) : (<Form/>) }
        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
