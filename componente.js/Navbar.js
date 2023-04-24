import React from "react";
import Link from "next/link";
import navStyle from "../styles/Navbar.module.css";
import Image from "next/image";
import logoSample from "../public/Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg  ${navStyle.navo}`}>
        <div className={`container `}>
          <Link className={`navbar-brand`} href="/">
            <Image src={logoSample} />
          </Link>
          <button
            className={`navbar-toggler ${navStyle.navflex}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${navStyle.navflex}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${navStyle.ora}`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Our Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Booking
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Error 404
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Login / Ragister
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Service Detail
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blogs
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${navStyle.phoneCon}`}
                  aria-current="page"
                  href="#"
                >
                  <FontAwesomeIcon icon={faPhone} />
                  <div> +(+01)999 888 777</div>
                </Link>
              </li>
              <li className="nav-item">
                <button className={`Bluebtn`}>
                  Contact Us <span>&gt;</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

{
  /* <form className="d-flex" role="search">
<input
  className="form-control me-2"
  type="search"
  placeholder="Search"
  aria-label="Search"
/>
<button className="btn btn-outline-success" type="submit">
  Search
</button>
</form> */
}
