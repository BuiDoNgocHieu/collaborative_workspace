const Form = (props) => {
  return (
    <div class="container">
      <div class="row">
        <div class="mb-3 col-6 mt-5">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="col-6"></div>
        <div class="mb-3 col-6">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="col-6"></div>

        <div class="col-6 mb-5">
          <label for="username" class="form-label">
            Username
          </label>
          <input type="text" class="form-control" id="username" />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
