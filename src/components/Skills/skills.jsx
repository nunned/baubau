    import "./skills.css";
    import React from "react";
    import UIDesign from "../../assets/design.png";
    import WebDesign from "../../assets/web.png";
    import SoftwareDesign from "../../assets/software.png";
    import reactIcon from "../../assets/tech-icons/react-icon.png";
    import htmlIcon from "../../assets/tech-icons/html5-icon.png";
    import jsIcon from "../../assets/tech-icons/js-icon.png";
    import cssIcon from "../../assets/tech-icons/css-icon.png";
    import photoshopIcon from "../../assets/tech-icons/photoshop-icon.png";
    import figmaIcon from "../../assets/tech-icons/figma-icon.png";
    import illustratorIcon from "../../assets/tech-icons/illustrator-icon.png";
    import webflowIcon from "../../assets/tech-icons/webflow-icon.png";
    import pythonIcon from "../../assets/tech-icons/python-icon.png";
    import javaIcon from "../../assets/tech-icons/java-icon.png";
    import wordpressIcon from "../../assets/tech-icons/wordpress-icon.png";

    const Skills = () => {
      return (
        <section id="skills">
        <span className="skill-title">What I do</span> <br />
        <div className="skillBars">
            <div className="skillBar">
              <img src={UIDesign} alt="UIDesign" className="skillBar-img" />
              <div className="skillBar-text">
                <h2>UI/UX Design</h2>
                <p>
                  Transforming ideas into intuitive, visually stunning interfaces. I
                  specialize in designing experiences that engage and delight users.
                </p>
              </div>
            </div>
            <div className="skillBar">
              <img src={WebDesign} alt="WebDesign" className="skillBar-img" />
                <div className="skillBar-text">
                <h2>Website Design</h2>
                <p>
                  Websites that not only look amazing but also work flawlessly.
                  Elevate your online presence with designs that captivate and
                  convert.
                </p>
              </div>
            </div>
            <div className="skillBar">
              <img
                src={SoftwareDesign}
                alt="SoftwareDevelopment"
                className="skillBar-img"
              />
              <div className="skillBar-text">
                <h2>Software Development</h2>
                <p>
                  Coding with precision and innovation. I develop software that
                  solves problems, scales with your business, and maintains
                  real-world functionality.
                </p>
              </div>
            </div>
          </div>
          <span className="skill-desc">
            As a Software Developer with a keen eye for web design, I seamlessly
            merge technical expertise with aesthetic and consistently deliver sites
            that are not only visually alluring but also remarkably user-centric. My
            strong grasp of design principles, coupled with a meticulous eye for
            detail, is complemented by my proficiency in HTML, CSS, and JavaScript,
            as well as design software like Adobe Photoshop and Illustrator.
          </span>
          <div className="tech-icons">
            <div className="marquee">
              {/* icons duplicated for the continuous loop effect */}
              {Array(2)
                .fill(
                  <>
                    <img src={reactIcon} alt="" className="tech-icon-img" />
                    <img src={htmlIcon} alt="" className="tech-icon-img" />
                    <img src={jsIcon} alt="" className="tech-icon-img" />
                    <img src={cssIcon} alt="" className="tech-icon-img" />
                    <img src={photoshopIcon} alt="" className="tech-icon-img" />
                    <img src={figmaIcon} alt="" className="tech-icon-img" />
                    <img src={illustratorIcon} alt="" className="tech-icon-img" />
                    <img src={webflowIcon} alt="" className="tech-icon-img" />
                    <img src={pythonIcon} alt="" className="tech-icon-img" />
                    <img src={javaIcon} alt="" className="tech-icon-img" />
                    <img src={wordpressIcon} alt="" className="tech-icon-img" />
                  </>
                )
                .map((icons, index) => (
                  <React.Fragment key={index}>{icons}</React.Fragment>
                ))}
            </div>
          </div>
        </section>
      );
    };

    export default Skills;
