import React from 'react';
import useStyles from './styles'

const GameInfo = () => {
  const { info } = useStyles();

  return (
    <div className={info}>
      Sum the numbers to reach the target
    </div>
  );
};

export default GameInfo;
