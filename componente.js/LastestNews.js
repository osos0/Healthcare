import React from "react";
import LastestNewsStyle from "../styles/LastestNewsStyle.module.css";
import Image from "next/image";
import Blog1 from "../public/Assets/Blog_1.jpg";
import Blog2 from "../public/Assets/Blog_2.jpg";
import Blog3 from "../public/Assets/Blog_3.jpg";
import Doc1 from "../public/Assets/pic1.jpg";
import Doc2 from "../public/Assets/pic2.jpg";
import Doc3 from "../public/Assets/pic3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
const LastestNews = () => {
  return (
    <>
      <section>
        <div className={`container ${LastestNewsStyle.lastMain}`}>
          <div className="row">
            <div className={`text-center col-12`}>
              <h4>Lastest News</h4>
              <h2>Our Lastest News</h2>
            </div>
            <div className="row">
              <div className={`col-md-4 col-sm-12 ${LastestNewsStyle}`}>
                <div className={`col-11 ${LastestNewsStyle.conOfBlogs}`}>
                  <div>
                    <div>
                      <Image src={Blog1} className={LastestNewsStyle.bigPic} />
                    </div>
                    <div className={`${LastestNewsStyle.dateCon}`}>
                      <div>
                        <Image src={Doc1} />
                      </div>
                      <p>Vino </p>
                      <div>
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>27 Apr 2023</p>
                      </div>
                    </div>
                    <h4 className={LastestNewsStyle.mainp}>
                      In This hospital there are apecial surgeon
                    </h4>
                    <button className={`${LastestNewsStyle.Bluebtn}`}>
                      View More <span>&gt;</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={`col-md-4 col-sm-12 ${LastestNewsStyle}`}>
                <div className={`col-11 ${LastestNewsStyle.conOfBlogs}`}>
                  <div>
                    <div>
                      <Image src={Blog2} className={LastestNewsStyle.bigPic} />
                    </div>
                    <div className={`${LastestNewsStyle.dateCon}`}>
                      <div>
                        <Image src={Doc2} />
                      </div>
                      <p>Victoria </p>
                      <div>
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>27 Apr 2023</p>
                      </div>
                    </div>
                    <h4 className={LastestNewsStyle.mainp}>
                      In This hospital there are apecial surgeon
                    </h4>
                    <button className={`${LastestNewsStyle.Bluebtn}`}>
                      View More <span>&gt;</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={`col-md-4 col-sm-12 ${LastestNewsStyle}`}>
                <div className={`col-11 ${LastestNewsStyle.conOfBlogs}`}>
                  <div>
                    <div>
                      <Image src={Blog3} className={LastestNewsStyle.bigPic} />
                    </div>
                    <div className={`${LastestNewsStyle.dateCon}`}>
                      <div>
                        <Image src={Doc3} />
                      </div>
                      <p>Chris </p>
                      <div>
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>27 Apr 2023</p>
                      </div>
                    </div>
                    <h4 className={LastestNewsStyle.mainp}>
                      In This hospital there are apecial surgeon
                    </h4>
                    <button className={`${LastestNewsStyle.Bluebtn}`}>
                      View More <span>&gt;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LastestNews;
