import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import useStyles from './styles'
const GameBoard = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.gameBoard}>
      <div className={classes.actionButtons}>
        {
          [1,2,3].map(el => (
            <Button variant="contained" size="small" color="primary" className={classes.margin}>
              {el}
            </Button>
            ))
        }
      </div>
      <div className={classes.actionButtons}>
        {
          [4,5,6].map(el => (
            <Button variant="contained" size="small" color="primary" className={classes.margin}>
              {el}
            </Button>
          ))
        }
      </div>
    </Container>
  );
};

export default GameBoard;
