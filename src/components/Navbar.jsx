import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className=" mb-5">
      <div className="flex flex-row justify-between">
        <h1 className=" text-3xl font-bold">KRIKUJASKU</h1>
        <div className="flex flex-row justify-between gap-5">
          <p>Home</p>
          <p>Bookings</p>
          <p>Contact</p>
          <p>About</p>
          <p>Blog</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
