// HomePage.jsx
import Intro from "../Intro/intro";
import Skills from "../Skills/skills";
import Works from "../Works/works";
import Ui from "../UI/ui";
import Contact from "../Contact/contact";
import Navbar from "../NavBar/navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Ui />
      <Contact />
    </>
  );
}

export default HomePage;
