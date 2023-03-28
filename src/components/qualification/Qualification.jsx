import React from "react";
import "./Qualification.css";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
const Qualification = () => {
  return (
    <section className="qualification">
      <h5>My personal journey</h5>
      <h2>Qualification</h2>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="button--flex">
            <FaGraduationCap className="qualification__icon"/> &nbsp; 
            <span>Education</span>
          </div>
        </div>
        <div className="qualification__sections">
          {/* <!-- qualification content  --> */}
          <div>
            {/* <!-- qualification 1 --> */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor's of Technology
                </h3>
                <h4
                  className="qualification__subtitle"
                  style={{ fontStyle: "italic" }}
                >
                  Computer Science and Engineering
                </h4>
                <span className="qualification__subtitle">
                  Kanpur Institute of Technology,kanpur
                </span>
                <div >
                  <h4 className="qualification__subtitle qualification__percentage">
                    CGPA: <i>7.69</i>
                  </h4>
                </div>
                <div >
                  <BsFillCalendarCheckFill className="qualification__calender" />
                  <span> &nbsp; 2019-2023</span>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* <!-- qualification 2 --> */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Intermediate <span>&#40;</span>
                  XII<span>&#41;</span>
                </h3>
                <span className="qualification__subtitle">UP Board</span>
                <div>
                  <h4 className="qualification__subtitle qualification__percentage">
                    Percentage: <i>86.8</i>
                  </h4>
                </div>
                <div>
                  <BsFillCalendarCheckFill className="qualification__calender" />
                  <span> &nbsp; 2017</span>
                </div>
              </div>
            </div>
            {/* <!-- qualification 3--> */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Highschool <span>&#40;</span>X<span>&#41;</span>
                </h3>
                <span className="qualification__subtitle">UP Board</span>
                <div className="">
                  <h4 className="qualification__subtitle qualification__percentage">
                    Percentage:<i> 85.3</i>
                  </h4>
                </div>
                <div className="">
                  <BsFillCalendarCheckFill className="qualification__calender"/>

                 <span> &nbsp; 2015</span>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
