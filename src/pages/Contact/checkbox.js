import React from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'

const CheckBox = ({
  privateState,
  setPrivateInfo,
  publicState,
  setPublicInfo,
}) => {
  const error = [privateState, publicState].filter((v) => v).length === 0
  const publicText = !privateState
    ? 'This message can be posted publicly'
    : 'This message can be also posted publicly'

  const HandlePrivateChange = () => {
    setPrivateInfo(!privateState)
  }

  const HandlePublicChange = () => {
    setPublicInfo(!publicState)
  }

  return (
    <FormControl required error={error} component='fieldset'>
      <FormLabel component='legend'>Pick one or two</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={privateState}
              onChange={HandlePrivateChange}
              name='private'
            />
          }
          label='I would like to send my message straight to you'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={publicState}
              onChange={HandlePublicChange}
              name='public'
            />
          }
          label={publicText}
        />
      </FormGroup>
      <FormHelperText>You can display an error</FormHelperText>
    </FormControl>
  )
}

export default CheckBox
