import { useState, useEffect } from "react";

import Header from "../components/sections/Header";

const RecordList = () => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    setRegistros(JSON.parse(localStorage.getItem("registros")));
  }, []);

  return (
    <div>
      <Header />
      <h1>datos en el localStorage</h1>
      <ul>
        {registros?.map((unRegistros, index) => (
          <li key={index}>{unRegistros.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecordList;
