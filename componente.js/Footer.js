import React from "react";
import FooterStayl from "../styles/Footer.module.css";
import Image from "next/image";
import logoSample from "../public/Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import facebook from "../public/Assets/facebook.png";
import instagram from "../public/Assets/instagram.png";
import linkedin from "../public/Assets/linkedin.png";
import twitter from "../public/Assets/twitter.png";

const Footer = () => {
  return (
    <div className={`container ${FooterStayl.footerMain}`}>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <Image src={logoSample} alt="Logo" />
          <p>
            Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
            smod tempor incididunt ut labore et.
          </p>
          <div className={`${FooterStayl.phoneCon}`}>
            <FontAwesomeIcon icon={faPhone} />
            <div>
              <div>Contact Us</div>
              <div>+11223345678</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <h2 className={`${FooterStayl.myh2}`}>Quick Links</h2>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Booking</li>
            <li>FAQs</li>
            <li>Blogs</li>
            <li>Our Team</li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h2 className={`${FooterStayl.myh2}`}>Our Services</h2>
          <ul>
            <li>Dental Care</li>
            <li>Cardiac Clinic</li>
            <li>Massage Therapy</li>
            <li>Cardiology</li>
            <li>Precise Diagnosis</li>
            <li>Ambulance Services</li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-12">
          <h2 className={`${FooterStayl.myh2}`}>Subscribe</h2>
          <form>
            <input type="email" defaultValue="" placeholder="Email Address" />
            <button>Subscribe Now</button>
          </form>
          <ul
            className={`d-flex justify-content-space-between align-items-center p-2 ${FooterStayl.ulCon}`}
          >
            <li>
              <a href="/">
                <Image src={facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="/">
                <Image src={twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="/">
                <Image src={linkedin} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="/">
                <Image src={instagram} alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
        <p className={`${FooterStayl.copyp}`}>
          Copyright © 2022 Design &amp; Developed by ThemeTrades
        </p>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import FooterStayl from "../styles/Footer.module.css";
// import Image from "next/image";
// import logoSample from "../public/Assets/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// import facebook from "../public/Assets/facebook.png";
// import instagram from "../public/Assets/instagram.png";
// import linkedin from "../public/Assets/linkedin.png";
// import twitter from "../public/Assets/twitter.png";

// const Footer = () => {
//   return (
//     <>
//       <div className={`container ${FooterStayl.footerMain}`}>
//         <div className="row">
//           <div className="col-md-3 col-sm-12">
//             <Image src={logoSample} />
//             <p>
//               Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
//               smod tempor incididunt ut labore et.
//             </p>
//             <div className={`${FooterStayl.phoneCon}`}>
//               <FontAwesomeIcon icon={faPhone} />
//               <div>
//                 <div>Contact Us</div>
//                 <div>+11223345678</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 col-sm-6">
//             <h2 className={`${FooterStayl.myh2}`}>Quick Linkes</h2>
//             <ul>
//               <li>About Us</li>
//               <li>Services</li>
//               <li> Booking</li>
//               <li>Faq's</li>
//               <li> Blogs</li>
//               <li>Out Team</li>
//             </ul>
//           </div>
//           <div className="col-md-3 col-sm-6">
//             <h2 className={`${FooterStayl.myh2}`}>Our Service</h2>
//             <ul>
//               <li>Dental Care</li>
//               <li>Cardiac Clinic</li>
//               <li> Massege Therapy</li>
//               <li> Cardiology</li>
//               <li>Precise Diagnosis</li>
//               <li>Abmbulance Services</li>
//             </ul>
//           </div>
//           <div className="col-md-3 col-sm-12">
//             <h2 className={`${FooterStayl.myh2}`}>Subcribe</h2>
//             <form>
//               <input type="email" value="email" placeholder="Email Address" />
//               <button>Subcribe Now</button>
//             </form>
//             <ul
//               className={`d-flex justify-content-space-between align-items-center p-2 ${FooterStayl.ulCon}`}
//             >
//               <li>
//                 <a href="/">
//                   <Image src={facebook} />
//                 </a>
//               </li>
//               <li>
//                 <a href="/">
//                   <Image src={twitter} />
//                 </a>
//               </li>
//               <li>
//                 <a href="/">
//                   <Image src={linkedin} />
//                 </a>
//               </li>
//               <li>
//                 <a href="/">
//                   <Image src={instagram} alt=""/>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <p className={`${FooterStayl.copyp}`}>
//             Copyright © 2022 Design & Developed by ThemeTrades
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;
