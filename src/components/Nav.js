import React, {Component} from "react";
import {NavLink} from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <h1>MotionTracker<span>.io</span></h1>
      <NavLink className="navBtn" to="/login" activeClassName="is-active">Login</NavLink>
    </nav>
  )
}


export default Nav;