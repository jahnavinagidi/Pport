import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail, IoSend } from "react-icons/io5";
import { motion } from "motion/react";

function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="contact" id="contact">
        <span className="section-heading"> Contact </span>

        <div className="social-bar">
          <span className="contact-sub-heading">
            Want to get in touch? contact me via email below, or via my socials:
          </span>

          <div className="icons">
            <a
              className="icon"
              href="https://www.linkedin.com/in/raghavendra-divi/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              className="icon"
              href="https://github.com/phaniraghavendr4" /* <- put your GitHub URL */
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              className="icon"
              href="mailto:diviphani588@gmail.com"
              aria-label="Email"
            >
              <IoMail />
            </a>
          </div>
        </div>

        {/* IMPORTANT: remove target and onSubmit reload */}
        <form
          action="https://formsubmit.co/diviphani588@gmail.com"
          method="POST"
          className="contact-form"
        >
          {/* FormSubmit recommended hidden fields */}
          <input
            type="hidden"
            name="_subject"
            value="New message from Portfolio"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          {/* Optional: after-submit redirect page (replace with your URL if you have a thank-you page) */}
          {/* <input type="hidden" name="_next" value="https://your-site-url/thanks" /> */}

          {/* Honeypot to reduce spam */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          <input
            name="subject"
            className="contact-input"
            placeholder="Title"
            required
          />

          <input
            name="email"
            className="contact-input"
            placeholder="Your Email"
            type="email"
            required
          />

          <textarea
            name="message"
            className="contact-input"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="send-form">
            <span>Send Message</span>
            <IoSend style={{ margin: "10px" }} />
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
