import Sidebar from "../backlog/sidebar";
import "./Board.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import ListGroup from "./list-group";
import { useState } from "react";

const Board = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Sidebar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <FaBars
          className="admin-header-icon"
          onClick={() => setCollapsed(!collapsed)}
        />
        <div className="admin-main">
          <div className="title">
            {" "}
            <div>Projects/Reactjs/Project backlog </div>
            <span>
              <FaUser className="icon" /> Hello user
            </span>
          </div>
          <div className="name"> Project backlog - Board name </div>
          <button type="button" class="btn btn-success button">
            <AiOutlinePlusCircle /> create New backlog
          </button>
          <div className="board">
            <ListGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
