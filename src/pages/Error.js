import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Oops, Page not Found</h3>
        <p>
          Sorry, but the page that you are looking for is not found. Click the
          link below to redirect to the home page
        </p>
        <Link to="/landing">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
