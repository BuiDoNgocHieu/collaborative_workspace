import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./Details.scss";
import { useState } from "react";
import Example from "../detailsworkspace/form-creat-project";
const WorkspaceDetails = (props) => {
  const params = useParams();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const workspaceId = params._id;

  const [project, setProject] = useState({});
  console.log(location);
  let dataParam = async (workspaceId) => {
    let res = await axios.get(
      `http://localhost:6061/api/workspace/${workspaceId} `
    );
    console.log("check:", res);
    setProject(res.data);
  };
  useEffect(() => {
    dataParam();
  }, [workspaceId]);

  console.log("setProject", project);
  return (
    <div className="detail-workspace container">
      <div className="header">
        <div className="heade-up">
          <h1>workspace Name : {location?.state.nameWorkSpace}</h1>
          <h2> Your work</h2>
          <button className="btn btn-success" onClick={handleShow}>
            <AiOutlinePlusCircle /> create New Project
          </button>
        </div>
        <div className="heade-down mt-5">
          <div
            class="card text-white bg-dark mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div class="card-header">team-2</div>
            <div class="card-body">
              <h5 class="card-title">Type : team-manage Software</h5>
              <p class="card-text">Board : 1</p>
              <p class="card-text"> Task : 5</p>
              <p class="card-text"> Done : </p>
            </div>
          </div>
        </div>
      </div>
      <Example show={show} handleShow={handleShow} dataParam={dataParam} />
    </div>
  );
};

export default WorkspaceDetails;
