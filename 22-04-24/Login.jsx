import React from 'react';
import { Grid,Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography,Link } from '@material-ui/core';

const Login=()=>{

    const paperStyle={padding :10,height:'50vh',width:280, margin:"140px auto" }
    const avatarStyle={background:'pink'}
    const btnstyle={margin:'8px 0'}
    return(
       <Grid>
           <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                   <Avatar style={avatarStyle}>K</Avatar>
                <h1>Sign In</h1>
            </Grid>
        <TextField label='Username' placeholder='Enter username' fullWidth />
        <TextField label='Password' placeholder='Enter password' type='password' fullWidth />  
        <Grid align='left'>
        <FormControlLabel
                control={
                <Checkbox
                    name="checkedB"
                    color="primary"
                />
                }  
                label="Remember me"
        />
        </Grid>
        <Button type='Submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign In</Button>
        <Grid align='left'>
        <Typography> 
            <Link href="#" >
              Forgot password
            </Link>
        </Typography>
        </Grid>
        <Typography> Do you have an account ?
                <Link href="#" >
                 Sign up ?
                </Link>
        </Typography>
           </Paper>
       </Grid>
    )
}

export default Login