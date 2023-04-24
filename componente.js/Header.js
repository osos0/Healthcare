import HeaderStyle from "../styles/Header.module.css";

import Image from "next/image";
import DoctoreImg from "../public/Assets/doctor.png";
import CrossImg from "../public/Assets/plus-orange.png";
import squareimg from "../public/Assets/squareimg.png";
import ballon from "../public/Assets/ballon.png";
import zigzag from "../public/Assets/zigzag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className={`container ${HeaderStyle.mainHeader}`}>
        <div className={`row`}>
          <div
            className={`col-lg-7 col-md-7 col-sm-12 ${HeaderStyle.leftHeader}`}
          >
            <h4>We Provide All Health Care Solution</h4>
            <h2>Protect Your Health And Take Care To Of Your Health</h2>
            <button>Read More</button>
            <Image src={CrossImg} alt="CrossImg" />
            <Image
              src={squareimg}
              className={HeaderStyle.square}
              alt="squareimg"
            />
            <Image src={ballon} className={HeaderStyle.balon} alt="balon" />
          </div>
          <div
            className={`col-lg-5 col-md-5 col-sm-12 ${HeaderStyle.RigthHeader}`}
          >
            <Image
              src={DoctoreImg}
              className={HeaderStyle.Doctore}
              alt="Doctore"
            />
            <Image src={zigzag} className={HeaderStyle.zigzag} alt="zigzag" />
            <FontAwesomeIcon icon={faSquare} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
