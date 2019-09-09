import React from 'react';
import useStyles from './styles'
import { Typography } from "@material-ui/core";

const GameBoardInfo = ({ stageNumber }) => {
  const classes = useStyles();

  return (
    <div className={classes.info}>
      <Typography className={classes.title}>
        Stage { stageNumber }
      </Typography>
    </div>
  );
};

export default GameBoardInfo;
