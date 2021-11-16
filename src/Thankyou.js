import React from "react";
import "./Thankyou.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
function Thankyou() {
  return (
    <div className="Thankyou">
      <h1>Thank you for choosing us!</h1>
      <h2>We are looking forward to seeing you soon!</h2>
      <Link to="/" style={{ color: "white" }}>
        <HomeIcon sx={{ fontSize: 30 }} />
      </Link>
    </div>
  );
}

export default Thankyou;
