import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(0.2),
  },
}));

export default useStyles
