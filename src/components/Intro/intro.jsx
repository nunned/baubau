import "./intro.css";
import { Link } from "react-scroll";
import bg from "../../assets/standingchanon.png";
import handshake from "../../assets/handshake.png";
import soundImg from "../../assets/sound.svg";
import soundFile from "../../assets/chanon.mp3";

const Intro = () => {
  const playSound = () => {
    const audio = new Audio(soundFile);
    audio.play();
    audio.addEventListener("ended", () => {});
  };

  return (
    <section id="intro">
      <div className="intro-content">
        <span className="hello">Hey!</span>
        <span className="intro-text">
          I&rsquo;m{" "}
          <span className="intro-name">
            Chanon
            <button className="sound-btn" onClick={playSound}>
              <img src={soundImg} alt="sound" />
            </button>
          </span>
        </span>
        <span className="tagline">a Website Designer</span>
        <p className="intro-para">
        I design and develop websites for any purpose, audience, and budget.
        </p>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className="btn">
            <img src={handshake} alt="" />
            Let&rsquo;s work
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
