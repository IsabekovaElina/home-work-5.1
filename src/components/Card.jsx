import "./Card.css";
function Card(props) {
  const fullData = props.date.toLocaleDateString();
  return (
    <div key={props.id} className="key">
      <img className="img" src={props.image} alt="img" />
      <p className="p">{props.name}</p>
      <p className="text">
        {props.text}

        <p className="date">{fullData}</p>
      </p>
    </div>
  );
}
export default Card;
