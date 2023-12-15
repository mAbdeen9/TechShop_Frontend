import Classes from "./CollectionCard.module.css";
import { NavLink } from "react-router-dom";

const CollectionCard = ({ title, desc, nav, img, imgAlt, imgStyle }) => {
  return (
    <div className={Classes.collection__unit}>
      <h2>{title}</h2>
      <p>{desc}</p>
      <NavLink
        style={{
          textDecoration: "none",
          color: "#1CB4F6",
          fontWeight: "600",
          fontSize: "18px",
        }}
        to={nav}
      >
        Shop {">"}
      </NavLink>
      <img src={img} alt={imgAlt} style={imgStyle} />
    </div>
  );
};

export default CollectionCard;
