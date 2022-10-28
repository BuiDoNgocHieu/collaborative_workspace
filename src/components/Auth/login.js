import "./login.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = (props) => {
  const toastFFF = () => {
    toast.success("success");
  };

  return (
    <div className="main">
      <form className="form" id="form-1">
        <h3 className="heading">you're welcome</h3>
        <p className="desc">login and enjoy ❤️ </p>

        <div className="spacer"></div>

        <div className="form-group">
          <label for="fullname" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" />
          <span className="form-message"></span>
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input type={"email"} className="form-control" />
        </div>

        <div className="form-group">
          <label className="form-label">PassWord </label>
          <input type="password" className="form-control" />
        </div>

        <div>
          <button
            type="button"
            className="btn btn-success submit"
            onClick={() => toastFFF()}
          >
            Login
          </button>
        </div>
        <div>
          Don't you have account yet ??
          <button type="button" className="btn  submit">
            <Link to="/register"> Sign up now</Link>
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

export default Login;
