import React from "react";
import { Route } from "react-router-dom";
import Web from "./Web";
import Mobile from "./Mobile";
import { Link, Routes } from "react-router-dom";

function Services() {
  return (
    <div>
      <h1>Services</h1>
      <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="space-x-4">
            <Link
              to="web"
              className="text-white hover:bg-blue-500 px-3 py-2 rounded"
            >
              Web Development
            </Link>
            <Link
              to="mobile"
              className="text-white hover:bg-blue-500 px-3 py-2 rounded"
            >
              Mobile Development
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="web" element={<Web />} />
        <Route path="mobile" element={<Mobile />} />
      </Routes>
    </div>
  );
}

export default Services;
