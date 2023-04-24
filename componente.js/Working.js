import React from "react";
import workingStyle from "../styles/Working.module.css";

const Working = () => {
  return (
    <>
      <div className={`container ${workingStyle.WorkingMain}`}>
        <div className={`row ${workingStyle.workingChild}`}>
          <div className={`col-12 text-center ${workingStyle.bigchild}`}>
            <h4>Working Process</h4>
            <h2>How we works?</h2>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className={`${workingStyle.childOne}`}>
              <div>01</div>
              <h4>Make Appointmnet</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
              <button className={`${workingStyle.Bluebtn}`}>
                View More <span>&gt;</span>
              </button>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className={`${workingStyle.childTwo}`}>
              <div>02</div>
              <h4>Take Treatment</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
              <button className={`${workingStyle.Bluebtn2}`}>
                View More <span>&gt;</span>
              </button>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className={`${workingStyle.childOne}`}>
              <div>03</div>
              <h4>Registration</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
              <button className={`${workingStyle.Bluebtn}`}>
                View More <span>&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Working;
