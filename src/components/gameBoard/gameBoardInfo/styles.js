import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  info: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: '25px',
    textAlign: 'center',
    marginBottom: '50px',
    fontWeight: 'bold'
  }
}));

export default useStyles
