import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gameBoard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  margin: {
    margin: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'center'
  },
}));

export default useStyles
