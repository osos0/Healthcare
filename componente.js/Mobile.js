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
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select Department</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select Doctore</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <input type="text" name="age" placeholder="Your Name" />
              <input type="text" name="age" placeholder="Your Age" />

              <button type="">Appointment Now</button>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={MobileStyle.mobileRight}>
              <Image src={BlackPhone} className={`${MobileStyle.Phoneimg}`} />
              <Image src={women} className={`${MobileStyle.womanImg}`} />
              <Image src={chat} className={`${MobileStyle.chatImg}`} />
              <Image src={check} className={`${MobileStyle.checkImg}`} />
              <Image src={setting} className={`${MobileStyle.settingImg}`} />
              <Image src={map} className={`${MobileStyle.mapImg}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
