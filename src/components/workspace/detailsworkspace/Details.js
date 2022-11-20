import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./Details.scss";
import { useState } from "react";
import Example from "./create-project";
const WorkspaceDetails = (props) => {
  const params = useParams();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const workspaceId = params.id;
  console.log(workspaceId);
  const [project, setProject] = useState([]);
  const abc = async () => {
    let data = await axios.get(
      `http://localhost:9091/api/project?workspaceId=${workspaceId}`
    );
    console.log(data);
    setProject(data.data);
  };
  useEffect(() => {
    abc();
  }, [workspaceId]);

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
          {project?.data?.projects &&
            project?.data?.projects?.length > 0 &&
            project?.data?.projects.map((item, index) => {
              return (
                <div
                  class="card text-white bg-dark mb-3"
                  style={{ maxWidth: "18rem" }}
                  key={index}
                >
                  <div class="card-header"> name : {item.name}</div>
                  <div class="card-body">
                    <p class="card-title"> type : {item.type}</p>
                    <p class="card-title"> Lead : {item.lead}</p>

                    <p class="card-title">id : {item._id}</p>

                    {/* <p class="card-text">Board : 1</p>
                    <p class="card-text"> Task : 5</p>
                    <p class="card-text"> Done : </p> */}
                  </div>
                </div>
              );
            })}
        </div>{" "}
        <Example show={show} handleShow={handleShow} dataParam={abc} />
      </div>
    </div>
  );
};

export default WorkspaceDetails;
