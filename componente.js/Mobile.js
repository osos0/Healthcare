import React from "react";
import MobileStyle from "../styles/Mobile.module.css";
import Image from "next/image";
import BlackPhone from "../public/Assets/mobile.png";
import women from "../public/Assets/women.png";
import chat from "../public/Assets/chat.png";
import check from "../public/Assets/check.png";
import setting from "../public/Assets/setting.png";
import map from "../public/Assets/map-pin.png";

const Mobile = () => {
  return (
    <>
      <div className={`container ${MobileStyle.mobileMain}`}>
        <div className="row">
          <div
            className={`col-lg-6 col-md-6 col-sm-12 ${MobileStyle.mobileLeft}`}
          >
            <form className={`${MobileStyle.MyForm}`}>
              <h2>Book Appointment</h2>
              <select className="form-select" defaultValue="Select Department">
                <option disabled>Select Department</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select className="form-select" defaultValue="Select Doctor">
                <option disabled>Select Doctor</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <input type="text" name="name" placeholder="Your Name" />
              <input type="text" name="age" placeholder="Your Age" />
              <button type="submit">Appointment Now</button>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={MobileStyle.mobileRight}>
              <Image
                src={BlackPhone}
                className={`${MobileStyle.Phoneimg}`}
                alt="Phoneimg"
              />
              <Image
                src={women}
                className={`${MobileStyle.womanImg}`}
                alt="womanImg"
              />
              <Image
                src={chat}
                className={`${MobileStyle.chatImg}`}
                alt="chatImg"
              />
              <Image
                src={check}
                className={`${MobileStyle.checkImg}`}
                alt="checkImg"
              />
              <Image
                src={setting}
                className={`${MobileStyle.settingImg}`}
                alt="settingImg"
              />
              <Image
                src={map}
                className={`${MobileStyle.mapImg}`}
                alt="mapImg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
