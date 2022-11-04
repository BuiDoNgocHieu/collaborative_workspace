import "./list-group.scss";
import { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { InitialData } from "../action/action";
import Column from "./column";

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
      {columns.map((column, index) => (
        <Column key={index} column={column} />
      ))}
    </div>
  );
};

export default ListGroup;
