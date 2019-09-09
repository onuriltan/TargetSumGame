import React from 'react';
import useStyles from './styles'
import { Container } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import GameBoardInfo from "./gameBoardInfo/GameBoardInfo";
import GameBoardButtons from "./gameBoardButtons/GameBoardButtons";
import ControlButtons from "./controlButtons/ControlButtons";

const Index = () => {
  const { main, paper } = useStyles();

  return (
    <Container size='sm' className={main}>
      <Paper className={paper} display="flex" flexDirection="column" justifyContent="center">
        <GameBoardInfo stageNumber={1} />
        <GameBoardButtons disabled={true} />
        <ControlButtons isStarted={false}  />
      </Paper>
    </Container>
  );
};

export default Index;
