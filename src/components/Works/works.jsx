import "./works.css";
import bloggerlogo from "../../assets/bloggerlogo.jpg";
import better_water from "../../assets/better_water.png";
import lounge from "../../assets/lounge.png";
import szn from "../../assets/szn.png";
import starry_logo from "../../assets/starry_logo.png";
import starry_solar from "../../assets/starry_solar.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="works-title">My Portfolio</h2>
      <span className="works-desc">
        I thrive on precision and ensuring every detail is perfect down to the
        pixel. I&apos;m eager to leverage my skills and experience to support
        businesses and creatives in achieving their goals and building a strong,
        lasting online presence.
      </span>
      <div className="works-images">
        <img src={better_water} alt="" className="works-img" />
        <img src={bloggerlogo} alt="" className="works-img" />
        <img src={szn} alt="" className="works-img" />
        <img src={starry_solar} alt="" className="works-img" />
        <img src={lounge} alt="" className="works-img lounge-img" />
        <img src={starry_logo} alt="" className="works-img" />
      </div>
      {/* add button to see more work once more work */}
    </section>
  );
};

export default Works;
