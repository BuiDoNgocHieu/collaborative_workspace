const Form = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="mb-3 col-6 mt-5">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="col-6"></div>
        <div className="mb-3 col-6">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="col-6"></div>

        <div className="col-6 mb-5">
          <label for="username" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
