import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import { FaRegEye } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

import ReactPaginate from "react-paginate";

const TableProject = (props) => {
  // Invoke when user click to request another page.
  const [pageCount, setPageCount] = useState(0);

  const handlePageClick = (event) => {
    console.log(`User requested page number ${event.selected}`);
  };

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name Project</th>
            <th scope="col">Url github</th>
            <th scope="col">Member</th>
            <th scope="col">Created Date</th>
            <th scope="col">Created By</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" style={{ fontSize: "25px" }}>
              {" "}
              1
            </th>
            <td style={{ color: "blue", fontSize: "25px" }}>ReactJs app</td>
            <td style={{ fontSize: "25px" }}>
              git@github.com:le-huy-95/new.git
            </td>
            <td>
              <DropdownButton id="dropdown-basic-button" title="(4)&nbsp;user">
                {" "}
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </td>

            <td style={{ fontSize: "25px" }}>10/12/2022</td>
            <td>
              {" "}
              <Button variant="primary">Admin</Button>
            </td>
            <td>
              <span>
                <FaRegEye
                  style={{
                    color: "red",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                <AiFillEdit
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "15px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                {" "}
                <MdOutlineRemoveCircleOutline
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row" style={{ fontSize: "25px" }}>
              2
            </th>
            <td style={{ color: "blue", fontSize: "25px" }}> ReactJs trello</td>
            <td style={{ fontSize: "25px" }}>git@github.com:aaaa/new.git</td>
            <td>
              <DropdownButton id="dropdown-basic-button" title="(3)&nbsp;user">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </td>
            <td style={{ fontSize: "25px" }}>10/12/2022</td>
            <td>
              {" "}
              <Button variant="danger">Members</Button>{" "}
            </td>
            <td>
              <span>
                <FaRegEye
                  style={{
                    color: "red",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                <AiFillEdit
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "15px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                {" "}
                <MdOutlineRemoveCircleOutline
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
            </td>
          </tr>
          {/* /////////////////// */}
          <tr>
            <th scope="row" style={{ fontSize: "25px" }}>
              3
            </th>
            <td style={{ color: "blue", fontSize: "25px" }}>ReactJs native</td>
            <td style={{ fontSize: "25px" }}>git@github.com:aaaa/new.git</td>
            <td>
              <DropdownButton id="dropdown-basic-button" title="(4)&nbsp;user">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </td>
            <td style={{ fontSize: "25px" }}>10/12/2022</td>
            <td>
              {" "}
              <Button variant="primary">Admin</Button>
            </td>
            <td>
              <span>
                <FaRegEye
                  style={{
                    color: "red",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                <AiFillEdit
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "15px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                {" "}
                <MdOutlineRemoveCircleOutline
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row" style={{ fontSize: "25px" }}>
              4
            </th>
            <td style={{ color: "blue", fontSize: "25px" }}>ReactJs native</td>
            <td style={{ fontSize: "25px" }}>git@github.com:aaaa/new.git</td>
            <td>
              <DropdownButton id="dropdown-basic-button" title="(4)&nbsp;user">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </td>
            <td style={{ fontSize: "25px" }}>10/12/2022</td>
            <td>
              {" "}
              <Button variant="primary">Admin</Button>
            </td>
            <td>
              <span>
                <FaRegEye
                  style={{
                    color: "red",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                <AiFillEdit
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "15px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                {" "}
                <MdOutlineRemoveCircleOutline
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row" style={{ fontSize: "25px" }}>
              5
            </th>
            <td style={{ color: "blue", fontSize: "25px" }}>ReactJs native</td>
            <td style={{ fontSize: "25px" }}>git@github.com:aaaa/new.git</td>
            <td>
              <DropdownButton id="dropdown-basic-button" title="(4)&nbsp;user">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </td>
            <td style={{ fontSize: "25px" }}>10/12/2022</td>
            <td>
              {" "}
              <Button variant="primary">Admin</Button>
            </td>
            <td>
              <span>
                <FaRegEye
                  style={{
                    color: "red",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                <AiFillEdit
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "15px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                {" "}
                <MdOutlineRemoveCircleOutline
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row" style={{ fontSize: "25px" }}>
              6
            </th>
            <td style={{ color: "blue", fontSize: "25px" }}>ReactJs native</td>
            <td style={{ fontSize: "25px" }}>git@github.com:aaaa/new.git</td>
            <td>
              <DropdownButton id="dropdown-basic-button" title="(4)&nbsp;user">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </td>
            <td style={{ fontSize: "25px" }}>10/12/2022</td>
            <td>
              {" "}
              <Button variant="primary">Admin</Button>
            </td>
            <td>
              <span>
                <FaRegEye
                  style={{
                    color: "red",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                <AiFillEdit
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "15px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                {" "}
                <MdOutlineRemoveCircleOutline
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row" style={{ fontSize: "25px" }}>
              7
            </th>
            <td style={{ color: "blue", fontSize: "25px" }}>ReactJs native</td>
            <td style={{ fontSize: "25px" }}>git@github.com:aaaa/new.git</td>
            <td>
              <DropdownButton id="dropdown-basic-button" title="(4)&nbsp;user">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </td>
            <td style={{ fontSize: "25px" }}>10/12/2022</td>
            <td>
              {" "}
              <Button variant="primary">Admin</Button>
            </td>
            <td>
              <span>
                <FaRegEye
                  style={{
                    color: "red",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                <AiFillEdit
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "15px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                {" "}
                <MdOutlineRemoveCircleOutline
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row" style={{ fontSize: "25px" }}>
              8
            </th>
            <td style={{ color: "blue", fontSize: "25px" }}>ReactJs native</td>
            <td style={{ fontSize: "25px" }}>git@github.com:aaaa/new.git</td>
            <td>
              <DropdownButton id="dropdown-basic-button" title="(4)&nbsp;user">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </td>
            <td style={{ fontSize: "25px" }}>10/12/2022</td>
            <td>
              {" "}
              <Button variant="primary">Admin</Button>
            </td>
            <td>
              <span>
                <FaRegEye
                  style={{
                    color: "red",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                <AiFillEdit
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "15px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span>
                {" "}
                <MdOutlineRemoveCircleOutline
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={10}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default TableProject;
