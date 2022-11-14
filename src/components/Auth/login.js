import "./login.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => {
    setName("");
    setPassword("");
  };
  const handleLogin = async () => {
    if (!username) {
      toast.error("palease enter name");
    }

    if (!password) {
      toast.error("please enter password");
    }
    let res = await axios.post("http://localhost:6061/api/auth/login", {
      username,
      password,
    });
    console.log("res ", res);
    if (res && res.data.success === 1) {
      dispatch({
        type: "FETCH_USER_LOGIN_SUCCES",
        payload: res,
      });
      toast.success("login success");
      handleClose();
      navigate("/");
      console.log(res);
    }
    if (res && res.data.success === 0) {
      toast.error("password wrong , please try again");
    }
  };

  return (
    <div className="main">
      <form className="form" id="form-1">
        <h3 className="heading">you're welcome</h3>
        <p className="desc">login and enjoy ❤️ </p>

        <div className="spacer"></div>

        <div className="form-group">
          <label for="fullname" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(event) => setName(event.target.value)}
          />{" "}
          <span className="form-message"></span>
        </div>

        <div className="form-group">
          <label className="form-label">PassWord </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div>
          <button
            type="button"
            className="btn btn-success submit"
            onClick={() => handleLogin()}
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
