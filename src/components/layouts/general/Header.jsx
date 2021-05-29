import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
export default function Header(props) {
    console.log('props', props)
    const { location } = props;
    console.log('location', location)
  return (
    <div id="header" className="header bg-color">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div id="logo" className="logo">
              <Link to="/">Logo place holder</Link>
            </div>
          </div>
          <div className="col-10">
            <div className="nav-wrap">
              <nav id="mainnav" className="mainnav">
                <ul className="menu">
                  <li className="">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="">
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="">
                    <Link to="/news">News</Link>
                  </li>
                  <li className="">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
