import React, { useState } from "react";
import Axios from "axios";

export default function App() {
  const [dog, setDog] = useState();
  const RandomImagem = () => {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setDog(response.data.message);
    });
  };
  return (
    <div>
      <img src={dog} />
      <button
        onClick={() => {
          RandomImagem();
        }}
      >
        Clique aqui e divirta-se
      </button>
    </div>
  );
}
