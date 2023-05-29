import { useState } from "react";
import Header from "../components/sections/Header";

const User = () => {
  const obtenerRecusros = () => {
    const datossessionStorage = sessionStorage.getItem("userSesion");
    if (datossessionStorage) {
      return JSON.parse(datossessionStorage);
    } else {
      return {};
    }
  };
  const [user, setUser] = useState(obtenerRecusros());

  return (
    <div>
      <Header />
      <div>
        <div>
          <h1>bienvenido {user?.username}</h1>
          <ul>
            <li>nombre de usuario:{user?.username}</li>
            <li>numero:{user?.number}</li>
            <li>edad:{user?.age}</li>
            <li>slider:{user?.slider}</li>
            <li>text:{user?.text}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
