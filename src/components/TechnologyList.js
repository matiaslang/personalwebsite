import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'papayawhip',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
    padding: '2rem',
    margin: '2rem',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  sheader: {
    fontSize: '2rem',
  },
}))

const TechnologyList = (list) => {
  const classes = useStyles()
  //let newArray = Object.entries(list)
  //newArray = Object.entries(list)
  let newArray = JSON.stringify(list)
  newArray = JSON.parse(newArray)

  console.log(newArray.list)
  console.log('test')
  console.log(Object.entries(newArray.list)[1])

  return (
    <List className={classes.root} subheader={<li />}>
      {Object.entries(newArray.list).map((value, key, third) => (
        <li key={`section-${key}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader className={classes.sheader}>
              {value[0]}
            </ListSubheader>
            {value[1].map((row) => (
              <ListItem key={`item-${key}-item ${row}`}>
                <ListItemText primary={row} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  )
}

export default TechnologyList
