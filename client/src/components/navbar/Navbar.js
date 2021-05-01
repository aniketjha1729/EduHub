import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <p>
      <i class="fas fa-users"></i> Welcome
      </p>
      <Link to="/admin/dashboard">CLick me</Link>
    </div>
  );
};

export default Navbar;
