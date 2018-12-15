import React from "react";
import Navbar from "./Navbar";
import Todo from "./Todo";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Sidebar />
          </div>
          <div className="col-8">
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
