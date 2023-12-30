import classes from "./AboutSection.module.css";
import hackingBoy from "../../assets/hackingBoy.png";
function AboutSection() {
  return (
    <section className="container">
      <div className={classes.about__container}>
        <img src={hackingBoy} alt="Coding boy"></img>
        <p>
          <span>Tech shop 🔥</span> is a passion project built from the ground
          up with React JS to hone my front-end development skills . This
          simulated shop allows me to experiment with UI/UX design, state
          management, and all the bells and whistles of React.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
