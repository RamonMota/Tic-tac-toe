import React, { useEffect, useState } from 'react';
import './AppStyle.js';
import * as s from './AppStyle.js';
import Square from './components/Square';
import { Rules } from './components/Rules.js';


function App() {
  const [board, setBoard] = useState(["","","","","","","","",""])
  const [player, setPlayer] = useState("x")
  const [result, setResult] = useState({winner: "null", state: "null"})

  useEffect(() =>{
    checkWinner();
    checkTie();

    if(player == "x") {
      setPlayer("o")
    } else {
      setPlayer("x")
    }
  }, [board]);

  useEffect(() => {
    if(result.state != "null") {
      setTimeout (() =>{
        alert(`Congrat ${result.winner}`)
      }, 200)
    }
  }, [result])

  const chooseSquare = (squere) => {
    setBoard(
      board.map((val, idx) => {
        if(idx == squere && val == "") {
          return player
        } 
          return val
      })
    );
  };

  const checkWinner = () => {
    Rules.forEach((currRules) => {
      const fistPlayer = board[currRules[0]];
      if (fistPlayer == "") return;

      let foundWinningRules = true;

      currRules.forEach((idx) => {
        if(board[idx] != fistPlayer) {
          foundWinningRules = false;
        }
      });
      if(foundWinningRules) {
        setResult({winner: player, state: "won" });
      }
    });
  }

  const checkTie = () => {
    let filled = true;
    board.forEach((square) => {
      if(square == "") {
        filled = false;
      }
    });

    if(filled) {
      setResult({ winner: "Not this time", state: "Tie"});
    }
  }

  return (
    <s.ContainerTicTac className="App">
      <s.TicTac>
        <Square val={board[0]} chooseSquare={() => {chooseSquare(0)}}/>
        <Square val={board[1]} chooseSquare={() => {chooseSquare(1)}}/>
        <Square val={board[2]} chooseSquare={() => {chooseSquare(2)}}/>
        <Square val={board[3]} chooseSquare={() => {chooseSquare(3)}}/>
        <Square val={board[4]} chooseSquare={() => {chooseSquare(4)}}/>
        <Square val={board[5]} chooseSquare={() => {chooseSquare(5)}}/>
        <Square val={board[6]} chooseSquare={() => {chooseSquare(6)}}/>
        <Square val={board[7]} chooseSquare={() => {chooseSquare(7)}}/>
        <Square val={board[8]} chooseSquare={() => {chooseSquare(8)}}/>
      </s.TicTac>
      <s.Footer>Power by <a target="blank" href="https://www.linkedin.com/in/ramon-mota-3b4b9413a/">Ramon Mota</a></s.Footer>
    </s.ContainerTicTac>
  );
}

export default App;
