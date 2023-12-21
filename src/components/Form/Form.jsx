import { useState } from "react";
import classes from "./Form.module.css";
import { IoMdSend } from "react-icons/io";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Handle form submission logic here (e.g., send data to a server)
    console.log("Form data:", formData);
  };

  return (
    <section className={`container ${classes.contact__container}`}>
      <p>
        Contact us
        <span className={classes.line} />
      </p>

      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={classes.contact__form}
      >
        <div className={classes.contact__content}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.contact__content}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.contact__content}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          Send Message <IoMdSend />
        </button>
      </form>
    </section>
  );
}

export default Form;
