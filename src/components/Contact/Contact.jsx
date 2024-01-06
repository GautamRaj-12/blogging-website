import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <h1 className="contact__heading">Get in Touch</h1>
        <div className="social__media">
          <a
            href="https://twitter.com/abdsa017"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-square-x-twitter"></i>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=rohanraj161@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-envelope contact-icon"></i>
          </a>
          <a
            href="https://www.instagram.com/abd_sa_017/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram contact-icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rohan-raj-604342213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin-in contact-icon"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
