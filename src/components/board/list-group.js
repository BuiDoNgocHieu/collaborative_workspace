import "./list-group.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { InitialData } from "../action/action";

const ListGroup = () => {
  const [board, setBoard] = useState({});
  const [columns, SetColumns] = useState({});

  useEffect(() => {
    const dataDB = InitialData.boards;
    const result = dataDB.find((item) => item.id === "Board-1");
    console.log(result);

    if (result) {
      setBoard(result);

      result.columns.sort((a, z) => {
        return (
          result.columnOrder.indexOf(a.id) - result.columnOrder.indexOf(z.id)
        );
      });

      SetColumns(result.columns);
    }
  }, []);

  if (isEmpty(board)) {
    return <div className="not-found"> Not found</div>;
  }
  return (
    <div className="board-content">
      <div className="column">
        <header>To do list</header>
        <ul className="card-list">
          <li className="card-item">Làm front end</li>
          <li className="card-item">thiết thế database</li>

          <li className="card-item">làm back end</li>

          <li className="card-item">nộp code</li>
        </ul>

        <footer>
          {" "}
          <AiOutlinePlus
            style={{
              marginRight: "10px",
              marginLeft: "25px",
              fontSize: "20px",
              color: "green",
            }}
          />
          Add another card
        </footer>
      </div>
      <div className="column">
        <header>In Progress</header>
        <ul className="card-list">
          <li className="card-item">Làm front end</li>
          <li className="card-item">thiết thế database</li>

          <li className="card-item">làm back end</li>

          <li className="card-item">nộp code</li>
          <li className="card-item">teste làm việc</li>
        </ul>

        <footer>
          {" "}
          <AiOutlinePlus
            style={{
              marginRight: "10px",
              marginLeft: "25px",
              fontSize: "20px",
              color: "green",
            }}
          />
          Add another card
        </footer>
      </div>
      <div className="column">
        <header>Done</header>
        <ul className="card-list">
          <li className="card-item">Làm front end</li>
          <li className="card-item">thiết thế database</li>

          <li className="card-item">làm back end</li>

          <li className="card-item">nộp code</li>
          <li className="card-item">teste làm việc</li>
        </ul>

        <footer>
          {" "}
          <AiOutlinePlus
            style={{
              marginRight: "10px",
              marginLeft: "25px",
              fontSize: "20px",
              color: "green",
            }}
          />
          Add another card
        </footer>
      </div>
    </div>
  );
};

export default ListGroup;
