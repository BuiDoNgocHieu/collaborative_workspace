import "./Board.scss";

const Card = (props) => {
  const { card } = props;
  return (
    <div>
      <li className="card-item">{card.tittle}</li>
    </div>
  );
};

export default Card;
