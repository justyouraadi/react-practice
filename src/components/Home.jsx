import React from "react";
import Sidebar from "./Sidebar";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="h-screen">
        <div className="flex h-full flex-col md:flex-row align-items-center">
          <div className="bg-gray-300">
            <Sidebar/>
          </div>

          <div className="overflow-y-auto flex-grow bg-fuchsia-400" >
            <Products />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
