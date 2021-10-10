import React, { useState } from 'react';
import './AppStyle.tsx';
import * as s from './AppStyle';




function App() {

  const [key, setkey] = useState("x");
  const cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const listItems = cardNumber.map((number) => <li key={number.toString()} value={key} id={number.toString()} onClick={() => alterar(number.toString())}></li>);

  function alterar(idsCards) {
    const identificador = idsCards
    console.log("veio")
  };


  // function incrementCount() {
  //   setCount(count +1)
  // }

  
  

  return (
    <s.ContainerTicTac className="App">
      <s.TicTac>
        {listItems}
      </s.TicTac>
      <s.Footer>Power by <a target="blank" href="https://www.linkedin.com/in/ramon-mota-3b4b9413a/">Ramon Mota</a></s.Footer>
    </s.ContainerTicTac>
  );
}

export default App;
