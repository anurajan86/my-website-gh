import "./style.css";

const Footer = () => {
    return (
      <footer>
        <a
          href="https://github.com/anurajan86"
          target="_blank"
        >
          <img
            src={`${process.env.PUBLIC_URL}/github.png`}
            alt="Gihub-icon"
          />
        </a>
        <a href="https://www.facebook.com/anuraag.govindarajan.1/" target="_blank">
          <img
            src={`${process.env.PUBLIC_URL}/facebookicon.png`}
            alt="Facebook-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/anuraaggovindarajan/"
          target="_blank"
        >
          <img
            src={`${process.env.PUBLIC_URL}/linkedinicon.png`}
            alt="LinkIn-icon"
          />
        </a>
      </footer>
    );
  };
  
  export default Footer;