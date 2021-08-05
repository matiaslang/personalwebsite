import IconButton from '@material-ui/core/IconButton'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

const UpButton = (props) => {
  if (props.id > 0) {
    return (
      <IconButton
        color='default'
        onClick={(e) => props.function(props.id, 'up')}
        size='medium'
        className={props.classes.upButton}
      >
        <ArrowUpwardIcon />
      </IconButton>
    )
  }
  return null
}

export default UpButton
