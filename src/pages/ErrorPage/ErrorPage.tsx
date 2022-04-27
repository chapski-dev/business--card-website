import { Link } from "react-router-dom";
import "./style.scss";
import { ReactComponent as Error404Icon } from "../../assets/icons/error404.svg";

export const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <Error404Icon />
          </div>
          <div className="col-md-6 align-self-center" style={{textAlign: 'center'}}>
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
            <p className="info-text">
              The page you are looking for does not exist. How you got here is a
              mystery. But you can click the button below to go back to the
              homepage.
            </p>
            <button className="btn green">
              <Link to="/" className="btn-link">
                HOME
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
