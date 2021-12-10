import React, { useState } from "react";
import axios from "axios";
import Kartica from "./Kartica";
import "./Test.css";
const Test = () => {
  const [podaci, setPodaci] = useState([]);
  const fecovanje = async () => {
    let res;
    const url =
      "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest";

    await axios.get(url).then((data) => {
      res = data.data.data;
      setPodaci(res);
    });
    console.log(res);
  };
  return (
    <div>
      <button onClick={fecovanje}>fecuj</button>

      <div className="kartice">
        {podaci.map((el) => {
          return (
            <div className="karticeee">
              <Kartica
                description={el.State}
                title={el.Year}
                api={el["ID State"]}
                link={el["ID Year"]}
                category={el["Slug State"]}
                opis={el.Population}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
