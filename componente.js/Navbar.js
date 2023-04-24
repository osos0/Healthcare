import React from "react";
import Link from "next/link";
import navStyle from "../styles/Navbar.module.css";
import Image from "next/image";
import logoSample from "../public/Assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg  ${navStyle.navo}`}>
        <div className={`container `}>
          <Link className={`navbar-brand`} href="/">
            <Image src={logoSample} alt="logo" />
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
              <li className="nav-item">
                <Link
                  className={`nav-link ${navStyle.ora}`}
                  aria-current="page"
                  href="/header"
                >
                  Header
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${navStyle.ora}`}
                  aria-current="page"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${navStyle.ora}`}
                  aria-current="page"
                  href="/process"
                >
                  Process
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${navStyle.ora}`}
                  aria-current="page"
                  href="/blogs"
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${navStyle.ora}`}
                  aria-current="page"
                  href="/book"
                >
                  Book
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
                    <Link className="dropdown-item" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/header">
                      Header
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/process">
                      Process
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/Book">
                      Book
                    </Link>
                  </li>
                </ul>
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
  /* <li className="nav-item dropdown">
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
</li> */
}

{
  /* <li className="nav-item">
<Link
  className={`nav-link ${navStyle.phoneCon}`}
  aria-current="page"
  href="#"
>
  <FontAwesomeIcon icon={faPhone} />
  <div> +(+01)999 888 777</div>
</Link>
</li> */
}
