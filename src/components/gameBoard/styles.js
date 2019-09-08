import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gameBoard: {
    minHeight: 'calc(100vh - 70px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  margin: {
    margin: theme.spacing(1),
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
