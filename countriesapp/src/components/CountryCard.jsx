import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <div className="card col ">
      <div className="card-body">
        <Link to={"/" + country.name}>
          <h5>{country.name}</h5>
        </Link>
        <p>{country.nativeName}</p>
      </div>
    </div>
  );
}

export default CountryCard;
