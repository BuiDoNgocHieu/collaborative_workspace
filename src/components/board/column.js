import "./Board.scss";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "./Card";
const Column = (props) => {
  const { column } = props;
  const cards = column.cards;

  cards.sort((a, z) => {
    return column.cardOder.indexOf(a.id) - column.cardOder.indexOf(z.id);
  });
  return (
    <div className="column">
      <header>{column.tittle}</header>
      <ul className="card-list">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
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
