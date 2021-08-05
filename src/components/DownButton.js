import IconButton from '@material-ui/core/IconButton'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import HomeIcon from '@material-ui/icons/Home'

const DownButton = (props) => {
  if (props.id < 3) {
    return (
      <IconButton
        color='default'
        onClick={(e) => props.function(props.id, 'down')}
        size='medium'
        className={props.classes.upButton}
      >
        <ArrowDownwardIcon />
      </IconButton>
    )
  } else if (props.id === 3) {
    return (
      <IconButton
        color='default'
        onClick={(e) => props.function(props.id, 'home')}
        size='medium'
        className={props.classes.upButton}
      >
        <HomeIcon />
      </IconButton>
    )
  }
}

export default DownButton
