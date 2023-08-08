import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <Link to="/">MainPage</Link>
      <Link to="contact">Contacts</Link>
      <Link to="main">HomePage</Link>
      <a href="profile/3">Profile</a>
    </nav>
  );
}
