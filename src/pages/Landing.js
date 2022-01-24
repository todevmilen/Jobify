import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/index";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Hello, Welcome to my Job Tracking App, that you can use to track
            your dream job interviews. Feel free to contact me if you have
            questions
            <br />
            Thank you for your visit! Have a nice day.
            <br />
            <a
              target="_blank"
              href="https://bg.linkedin.com/in/milen-todev-1a3510167"
            >
              LinkedIn
            </a>
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
