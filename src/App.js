import React from 'react';
import Header from "./components/layout/header/Header";
import GameBoard from "./components/gameBoard";
import GameInfo from "./components/gameInfo/GameInfo";
import { Paper } from '@material-ui/core';

const App = () => {
  return (
    <>
      <Header/>
      <GameInfo />
      <div>
        <GameBoard />
      </div>
    </>
  );
}

export default App
