import "./login.scss";
import { Link } from "react-router-dom";

const Register = (props) => {
  return (
    <div className="main">
      <form className="form" id="form-1">
        <h3 className="heading">you're welcome</h3>
        <p className="desc">Register </p>

        <div className="spacer"></div>

        <div className="form-group">
          <label for="fullname" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder=" Enter your name "
            className="form-control"
          />
          <span className="form-message"></span>
        </div>

        <div className="form-group">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your mail"
            className="form-control"
          />
          <span className="form-message"></span>
        </div>

        <div className="form-group">
          <label for="password" className="form-label">
            Password{" "}
          </label>
          <input
            type="password"
            placeholder="password"
            className="form-control"
          />
          <span className="form-message"></span>
        </div>
        <div className="form-group">
          <label for="password" className="form-label">
            Confirm Password{" "}
          </label>
          <input
            type="password"
            placeholder="password"
            className="form-control"
          />
          <span className="form-message"></span>
        </div>

        <div>
          <button type="button" class="btn btn-success submit">
            Sign Up
          </button>
        </div>
        <div>
          <button type="button" class="btn   submit">
            <Link to="/"> Back to HomePage</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;