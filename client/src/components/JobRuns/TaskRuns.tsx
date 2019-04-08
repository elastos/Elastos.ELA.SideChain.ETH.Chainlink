import React from 'react'
import Typography from '@material-ui/core/Typography'
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core/styles'
import StatusIcon from '../Icons/Status'

const styles = ({ spacing }: Theme) =>
  createStyles({
    container: {
      margin: 0,
      paddingLeft: 0
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      listStyle: 'none',
      paddingBottom: spacing.unit * 2,
      '&:last-child': {
        paddingBottom: 0
      }
    },
    status: {
      marginRight: spacing.unit * 2
    }
  })

interface IProps extends WithStyles<typeof styles> {
  taskRuns?: ITaskRun[]
}

const TaskRuns = ({ taskRuns, classes }: IProps) => {
  return (
    <ul className={classes.container}>
      {taskRuns &&
        taskRuns.map((run: ITaskRun) => {
          return (
            <li key={run.id} className={classes.item}>
              <StatusIcon width={40} className={classes.status}>{run.status}</StatusIcon>
              <Typography variant="body1" inline>{run.type}</Typography>
            </li>
          )
        })}
    </ul>
  )
}

export default withStyles(styles)(TaskRuns)
