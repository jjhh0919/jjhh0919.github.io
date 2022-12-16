import React from "react";
import AOS from "aos";
AOS.init();

const blog = () => {
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
          <h2>Blog</h2>
          <div className="space-border"></div>
        </div>
      </div>
      <div className="spacer-single"></div>
      <div className="row">
        <div
          className="col-lg-6"
          data-aos="fade"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <div className="text">
                <h4>기초웹개발론 홈</h4>
                <div>
                  <a href="/webdev2022">
                    <button className="btn-main">기초웹개발론 페이지로</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <div className="text">
                <h4>블로그</h4>
                <div>
                  <a href="/webdev2022/blog">
                    <button className="btn-main">블로그 화면으로</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
