import React from "react";
import AOS from "aos";
AOS.init();

const hero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>My Resume</h2>
          <div className="space-border"></div>
        </div>
      </div>
      <div className="row gh-5">
        <div className="col-lg-6" data-aos="fade-up" data-aos-once="true">
          <div className="p-4">
            <h3 className="s_border">Experiences</h3>
            <ul className="d_timeline">
              <li className="d_timeline-item">
                <h3 className="d_timeline-title">2022</h3>
                <p className="d_timeline-text">
                  <span className="d_title">캡스톤디자인</span>
                  <span className="d_company">Antudy</span>
                  캡스톤 디자인 수업을 통해 앱 개발 경험
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-once="true">
          <div className="p-4">
            <h3 className="s_border">Education</h3>
            <ul className="d_timeline">
              <li className="d_timeline-item">
                <h3 className="d_timeline-title">2018 - now</h3>
                <p className="d_timeline-text">
                  <span className="d_title">컴퓨터공학과</span>
                  <span className="d_company">제주대학교</span>
                  컴퓨터공학 전공 공부
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="spacer-double"></div>
      </div>
    </div>
  );
};

export default hero;
