import classes from "./Form.module.css";
import { IoMdSend } from "react-icons/io";
import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm("xpzvaodg");
  if (state.succeeded) {
    return (
      <p className={`container ${classes.message__container}`}>
        Thanks for contacting us. <br /> we've received your message ✅
      </p>
    );
  }

  return (
    <section id="contact" className={`container ${classes.contact__container}`}>
      <p>
        Contact us
        <span className={classes.line} />
      </p>

      <form onSubmit={handleSubmit} className={classes.contact__form}>
        <div className={classes.contact__content}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={classes.contact__content}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={classes.contact__content}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit">
          Send Message <IoMdSend />
        </button>
      </form>
    </section>
  );
}

export default Form;
