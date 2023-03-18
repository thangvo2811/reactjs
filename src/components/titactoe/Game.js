import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "./../../helper";

//initialState = {}
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

//immutable: ko the chinh sua

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      // console.log("IT working", state, action.payload);
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      // boardCopy[index] = state.xIsNext ? "X" : "O";
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }

    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }
    default:
      console.log("Error");
      break;
  }
  return state;
};

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);

  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const action = { type: "CLICK", payload: {} };

  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  // });

  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // console.log(boardCopy[index]);
    // // setBoard(boardCopy);
    // // setXIsNext((xIsNext) => !xIsNext);
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // });
  };
  const handleResetGame = () => {
    dispatch({ type: "RESET" });
    // setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && (
        <div className="game-winner">
          {" "}
          {winner ? `Winner is ${winner}` : ""}
        </div>
      )}
      <button onClick={handleResetGame} className="game-reset">
        Reset Game
      </button>
    </div>
  );
};

export default Game;
