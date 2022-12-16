import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from "../layout/Navbar";
import Hero from "../section/hero";
import About from "../section/about";
import Whatido from "../section/whatido";
import Blog from "../section/blog";
import Gallery from "../section/gallery";
import Resume from "../section/resume";
import Contact from "../section/contact";
import Footer from "../section/footer";
import Preloader from "../layout/Preloader";
import ScrollToTopBtn from "../layout/ScrollToTop";
import { GlobalStyles } from "./style/light";
import Particle from "../layout/Particle";

const image1 = "./img/background/bg_1.jpg";

function home() {
  return (
    <>
      <GlobalStyles />
      <Preloader />
      <div className="home">
        <header id="header-wrap">
          <Navbar />
        </header>

        {/* HERO */}
        <section id="hero-area" className="bg-bottom py-0">
          <Parallax bgImage={image1} strength={300}>
            <Particle />
            <Hero />
            <Link smooth spy to="about">
              <span className="mouse transition" id="fly">
                <span className="scroll"></span>
              </span>
            </Link>
          </Parallax>
        </section>

        {/* ABOUT */}
        <section id="about" className="pb-0">
          <About />
        </section>

        {/* What I DO */}
        <section id="whatido">
          <Whatido />
        </section>

        {/* Gallery */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* Gallery */}
        <section id="resume" className="pb-0">
          <Resume />
        </section>

        {/* 기초웹개발론 */}
        <section id="blog" className="pb-0">
          <Blog />
        </section>

        {/* contact */}
        <section id="contact" className="pb-0">
          <Contact />
          <Footer />
        </section>

        <div className="float-text">
          <div className="de_social-icons">
            <span className="buton">
              <a href="https://github.com/jjhh0919">
                <i className="fa fa-github fa-lg"></i>
              </a>
            </span>
          </div>
          <span>Follow Me</span>
        </div>
      </div>
      <ScrollToTopBtn />
    </>
  );
}

export default home;
