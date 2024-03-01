import { HOST } from "../constants";
import "./Card.scss";

const Card = (props) => {
  const { image, city, name, address } = props;
  return (
    <div className="Card">
      <div className="image">
        <img src={`${HOST}/${image}`} alt="image" />
      </div>
      <div className="description">
        <h4>{name}</h4>
        <p>{address}</p>

        <p>{city}</p>
      </div>
    </div>
  );
};

export default Card;
