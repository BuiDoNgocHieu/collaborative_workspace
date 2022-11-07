import "./list-group.scss";
import { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { InitialData } from "../action/action";
import Column from "./column";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag, generateItems } from "../util/state-drog-drag";

const ListGroup = () => {
  const [board, setBoard] = useState({});
  const [columns, SetColumns] = useState({});

  useEffect(() => {
    const dataDB = InitialData.boards;
    const result = dataDB.find((item) => item.id === "Board-1");
    // console.log(result);

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

  const onColumnDrop = (dropResult) => {
    let newColumns = [...columns];
    newColumns = applyDrag(newColumns, dropResult);
    SetColumns(newColumns);
    let newBoard = { ...board };
    newBoard.columnOder = newColumns.map((column) => column.id);
    newBoard.columns = newColumns;
    console.log(newBoard);
  };
  const onCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      let newColumns = [...columns];
      let curColumnm = newColumns.find((culumn) => culumn.id === columnId);
      curColumnm.cards = applyDrag(curColumnm.cards, dropResult);
      curColumnm.cardOder = curColumnm.cards.map((card) => card.id);
      console.log(curColumnm);
      SetColumns(newColumns);
    }
  };

  return (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        // dung de lay thong tin cua cot can keo tha
        getChildPayload={(index) => columns[index]}
        //
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: "col-drop-preview",
        }}
      >
        {columns.map((column, index) => (
          <Draggable key={index}>
            <Column column={column} onCardDrop={onCardDrop} />
          </Draggable>
        ))}
      </Container>
    </div>
  );
};

export default ListGroup;
