import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core'

import useStyles from './styles'

const Main = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardHeader title='Expense Tracker' subheader='Powered by Sppechly' />
      <CardContent>
        <Typography align='center' variant='h5'>
          Total Balance
        </Typography>
        <Typography
          align='subtitle1'
          style={{ lineHeight: '1.5em', marginTop: '20px' }}
        >
          {/* InfoCard */}
          Try saying: Add income $100 in category Salary for Monday...
        </Typography>
        <Divider />
        {/* Form */}
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid item spacing={2}>
          <Grid item xs={12}>
            {/* List */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main
