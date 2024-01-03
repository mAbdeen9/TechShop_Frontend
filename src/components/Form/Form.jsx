import classes from "./Form.module.css";
import { IoMdSend } from "react-icons/io";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

function Form() {
  const [state, handleSubmit] = useForm("xpzvaodg");
  const [isLoading, setIsLoading] = useState(false);

  if (state.succeeded) {
    setTimeout(() => {
      const contact = document.getElementById("contact");
      contact.scrollIntoView({ behavior: "smooth" });
    }, [1]);
    return (
      <section
        id="contact"
        className={`container ${classes.contact__container}`}
      >
        <p className={`container ${classes.message__container}`}>
          Thanks for contacting us. <br /> we've received your message ✅
        </p>
      </section>
    );
  }

  if (state.errors) alert("Something went wrong try again 🙁");

  const customSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await handleSubmit(e);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={`container ${classes.contact__container}`}>
      <p>
        Contact us
        <span className={classes.line} />
      </p>
      <form onSubmit={customSubmitHandler} className={classes.contact__form}>
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
          {isLoading ? "Sending ..." : "Send Message "}
          <IoMdSend />
        </button>
      </form>
    </section>
  );
}

export default Form;
