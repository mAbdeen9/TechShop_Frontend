import Classes from "./CollectionCard.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const CollectionCard = ({ title, desc, img, imgAlt, imgStyle }) => {
  const navigate = useNavigate();
  const cardHandler = () => {
    navigate(`/products/${title.toLowerCase()}`, {});
  };

  return (
    <div className={Classes.collection__unit} onClick={cardHandler}>
      <h2>{title}</h2>
      <p>{desc}</p>
      <NavLink
        style={{
          textDecoration: "none",
          color: "#1CB4F6",
          fontWeight: "600",
          fontSize: "18px",
        }}
      >
        Shop {">"}
      </NavLink>
      <img src={img} alt={imgAlt} style={imgStyle} />
    </div>
  );
};

export default CollectionCard;
