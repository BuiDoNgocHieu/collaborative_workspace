import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useLocation } from "react-router-dom";

function Example(props) {
  const { show, handleShow, dataParam } = props;
  const params = useParams();
  const workspaceId = params._id;

  const [name, setName] = useState("");
  const [createBy, setCreateBy] = useState("");

  const [type, setType] = useState("Choose");
  const handleCreatProject = async () => {
    let data = {
      name: name,
      type: type,
    };

    let res = await axios.post(
      `http://localhost:6061/api/workspace/create`,
      data
    );
    console.log(res);
    if (!name) {
      toast.error("please enter name");
      return;
    }

    if (res && res.data.success === 1) {
      console.log("res", res);
      toast.success("create new project success");
      setName("");
      setType("");
      handleShow();
      await dataParam();
    }

    if (res && res.data.success === 0) {
      toast.error(res.data.message);
      return;
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleShow} size="l">
        <Modal.Header closeButton>
          <Modal.Title>New Workspace</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                Name
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="col-md-12">
              <label for="inputPassword4" className="form-label">
                Type
              </label>

              <select
                id="inputState"
                class="form-select"
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <option>Team-managed</option>
                <option>Company-managed</option>
                <option>Essential features</option>
                <option>Advanced features</option>
              </select>
            </div>
            <div className="col-md-12"></div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreatProject}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
