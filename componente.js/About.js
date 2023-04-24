import AboutStyle from "../styles/About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmbulance,
  faBed,
  faNotesMedical,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
  return (
    <>
      <div className={`container ${AboutStyle.mainStyle}`}>
        <div className="row">
          <div
            className={`col-lg-6 col-md-6 col-sm-12 ${AboutStyle.leftaboutStyle}`}
          >
            <div className={`row ${AboutStyle.rowleftaboutStyle}`}>
              <div className={AboutStyle.orangeDot}></div>
              <div
                className={`col-lg-6 col-md-6 col-sm-6 ${AboutStyle.childOne}`}
              >
                <div></div>
              </div>
              <div
                className={`col-lg-6 col-md-6 col-sm-6 ${AboutStyle.childTwo}`}
              >
                <div></div>
              </div>
              <div
                className={`col-lg-6 col-md-6 col-sm-6 ${AboutStyle.childThree}`}
              >
                <div></div>
              </div>
              <div
                className={`col-lg-6 col-md-6 col-sm-6 ${AboutStyle.childFour}`}
              >
                <div className={AboutStyle.blueBigFram}>
                  20
                  <p>Years Experience</p>
                  <div className={AboutStyle.blueFram}></div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-6 col-md-6 col-sm-12 ${AboutStyle.RightaboutStyle}`}
          >
            <h4> About Us</h4>
            <h2>The Great Place Of Medical Hospital Center</h2>
            <p>
              We provide the special tips and advice’s of heath care treatment
              and high level of best technology involve in the our hospital.
            </p>
            <div className={`${AboutStyle.fourBoxes}`}>
              <div className={`${AboutStyle.fourBoxesBigChild}`}>
                <div className={`${AboutStyle.fourBoxesChild}`}>
                  <FontAwesomeIcon icon={faAmbulance} />
                  <div>Emergency Help </div>
                </div>
                <div className={`${AboutStyle.fourBoxesChild}`}>
                  <FontAwesomeIcon icon={faBed} />
                  <div>Qualified Doctors </div>
                </div>
              </div>
              <div className={`${AboutStyle.fourBoxesBigChild}`}>
                <div className={`${AboutStyle.fourBoxesChild}`}>
                  <FontAwesomeIcon icon={faUserDoctor} />
                  <div>Best Professionals </div>
                </div>
                <div className={`${AboutStyle.fourBoxesChild}`}>
                  <FontAwesomeIcon icon={faNotesMedical} />
                  <div> Medical Treatment</div>
                </div>
              </div>
            </div>

            <button>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;

// {/* <div className="row"> */}
// <div className="col col-lg-6 col-md-6 col-sm-12 ">Column</div>
// <div className="col col-lg-6 col-md-6 col-sm-12 ">Column</div>
// <div className="col col-lg-6 col-md-6 col-sm-12 ">Column</div>
// <div className="col col-lg-6 col-md-6 col-sm-12 ">Column</div>
// {/* </div> */}
