import React from "react";
import AOS from "aos";
AOS.init();

const whatido = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-12 text-center"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <h2>What I Do</h2>
          <div className="space-border"></div>
        </div>
      </div>
      <div className="spacer-single"></div>
      <div className="row">
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <i className="icon_book id-color-2"></i>
              <div className="text">
                <h3>Study</h3>
                <p>열심히 공부 중</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <i className="icon_tools id-color-2"></i>
              <div className="text">
                <h3>Web Development</h3>
                <p>웹 개발(HTML/CSS/JavaScript)</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <i className="icon_mobile id-color-2"></i>
              <div className="text">
                <h3>App Development</h3>
                <p>앱 개발(React Native)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default whatido;
