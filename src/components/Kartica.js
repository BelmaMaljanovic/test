import React from "react";
import "./Kartica.css";
const Kartica = ({ api, description, title, link, category, opis }) => {
  return (
    <div className="kartica">
      <p>{title}</p>
      <p>{api}</p>
      <p>{description}</p>

      <p>{link}</p>

      <p>{category}</p>
      <p>{opis}</p>
    </div>
  );
};

export default Kartica;
