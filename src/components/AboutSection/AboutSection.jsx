import classes from "./AboutSection.module.css";
import HandCoding from "../../assets/Handcoding.gif";

function AboutSection() {
  return (
    <section className={`container ${classes.about__section}`}>
      <div className={classes.about__container}>
        <img src={HandCoding} alt="hand coding" />
        <p>
          <span>Tech shop</span> is a passion project built from the ground up
          with React JS to hone my front-end development skills . This simulated
          shop allows me to experiment with UI/UX design, and all the bells and
          whistles of React.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
