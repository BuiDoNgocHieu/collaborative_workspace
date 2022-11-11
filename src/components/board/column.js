import "./column.scss";
import { Container, Draggable } from "react-smooth-dnd";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";

import Card from "./Card";
const Column = (props) => {
  const { column, onCardDrop, inputTittle } = props;
  const cards = column.cards;

  cards.sort((a, z) => {
    return column.cardOder.indexOf(a.id) - column.cardOder.indexOf(z.id);
  });

  return (
    <div className="column">
      <div className="column-drag-handle">
        <div className="title-header"> {column.tittle}</div>
        <div className="option">
          <span>{column.cards.length}</span>
          <BsThreeDots />
        </div>
      </div>
      <ul className="card-list">
        <Container
          groupName="col"
          onDrop={(dropResult) => onCardDrop(column.id, dropResult)}
          getChildPayload={(index) => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "drop-preview",
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <Card card={card} />
            </Draggable>
          ))}
        </Container>
      </ul>

      <footer>
        {" "}
        <span></span>
        <AiOutlinePlusCircle
          style={{
            marginRight: "10px",
            marginLeft: "25px",
            fontSize: "20px",
            color: "green",
          }}
        />
        Add new card
      </footer>
    </div>
  );
};

export default Column;
