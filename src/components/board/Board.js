import Sidebar from "../backlog/sidebar";
import "./Board.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import ListGroup from "./list-group";
import { useState } from "react";
import Search from "../search";
import { Link } from "react-router-dom";
import { IoIosPersonAdd } from "react-icons/io";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

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
              <FaUser className="icon" />
              <Link to="/login">Login</Link>{" "}
            </span>
          </div>
          <div className="name"> Project backlog - Board name </div>
          <Search />
          <div className="line">
            <button type="button" class="btn btn-success button  ">
              <div>
                <AiOutlinePlusCircle /> create New backlog
              </div>
            </button>{" "}
            <DropdownButton id="dropdown-basic-button" title="(4)&nbsp;user">
              <Dropdown.Item href="#/action-1">Sơn</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Hiếu</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Đạt</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Huy</Dropdown.Item>
            </DropdownButton>
            <button type="button" class="btn btn-light button  ">
              <div>
                <IoIosPersonAdd /> invite user
              </div>
            </button>{" "}
          </div>

          <ListGroup />
        </div>
      </div>
    </div>
  );
};

export default Board;
