import React from "react";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  const handleOnClick = () => {

    history.push ('/currencies');
  };

  return (
    <div>
      <h1>Bienvenido a CryptoConsultas</h1>
      <button onClick= {handleOnClick}>Consultá</button>
    </div>
  );
};

export default Home;
