import { useNavigate } from "react-router-dom";
import Classes from "./Logo.module.css";

function Logo() {
  const navigate = useNavigate();

  return (
    <div className={Classes.logo} onClick={() => navigate("/home", {})}>
      Tech
      <span>Shop</span>
    </div>
  );
}

export default Logo;
