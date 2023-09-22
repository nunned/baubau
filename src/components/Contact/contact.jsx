import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import insta from "../../assets/instagram.png";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwkdqpqr");
  if (state.succeeded) {
    return <h2 className="form-complete">Thanks for joining!</h2>;
  }
  return (
    <section id="contact-page">
      <div id="client"></div>
      <div id="contact">
        <div className="desc-wrap">
          <h1 className="contact-page-title">Contact Me</h1>
          <span className="contact-desc">
            Let&rsquo;s connect and explore potential work opportunities
            together. <br />
            Begin by filling out the form below. <br />
            Or send me an email at&nbsp;
            <a href="mailto:chanon@baubau.space">chanon@baubau.space</a>
          </span>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            id="userName"
            type="text"
            name="userName"
            className="name"
            placeholder="Your Name"
            required
          />
          <ValidationError
            prefix="Name"
            field="userName"
            errors={state.errors}
          />

          <input
            id="email"
            type="email"
            name="userEmail"
            className="email"
            placeholder="Your Email"
            required
          />
          <ValidationError
            prefix="Email"
            field="userEmail"
            errors={state.errors}
          />

          <textarea
            id="message"
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            className="submit-btn"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>

        <div className="links">
          <a
            href="https://www.instagram.com/baubau.space/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" className="link" />
          </a>
          {/* edit once more social media */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
