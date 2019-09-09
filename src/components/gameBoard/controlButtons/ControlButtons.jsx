import React from 'react';
import useStyles from './styles'
import Button from '@material-ui/core/Button';
import { PlayArrow, SkipNext, Replay } from '@material-ui/icons';

const ControlButtons = ({ isStarted }) => {
  const classes = useStyles();
  return (
    <div className={classes.buttons}>
      <Button variant="outlined" className={classes.button} color="primary" disabled={isStarted}>
        Start
        <PlayArrow className={classes.rightIcon} />
      </Button>
      <Button variant="outlined" className={classes.button} color="secondary" disabled={!isStarted}>
        Replay
        <Replay className={classes.rightIcon} />
      </Button>
      <Button variant="outlined" className={classes.button} color="default" disabled={!isStarted}>
        Pass
        <SkipNext className={classes.rightIcon} />
      </Button>
    </div>
  );
};

export default ControlButtons;
