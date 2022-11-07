import "./column.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { Container, Draggable } from "react-smooth-dnd";

import Card from "./Card";
const Column = (props) => {
  const { column, onCardDrop } = props;
  const cards = column.cards;

  cards.sort((a, z) => {
    return column.cardOder.indexOf(a.id) - column.cardOder.indexOf(z.id);
  });

  return (
    <div className="column">
      <header className="column-drag-handle">
        {column.tittle} -<span>{column.cards.length} itmes</span>
      </header>
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
        <AiOutlinePlus
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
