import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const useStyles = makeStyles({
    centeredText: {
      textAlign: 'center',
      fontFamily: 'Arial',
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'black',

    },
    root: {
      backgroundColor: 'pink', 
      minHeight: '100vh', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:'20px',
      marginBottom:'10px',
    },
  });
  const StyledPaper = styled(Paper)(({ theme }) => ({
    width: 720,
    height: 450,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    
  }));
function Assp() {
    const classes = useStyles();
    
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.centeredText}>
        Connect With Our Digital Marketing Experts
        </Typography>
        <Typography className={classes.centeredText}>
        Lorem ipsum dolor sit amet consectetur adispiscing elit. Perspiciatis adipisci voluptate eveniet quasi
         molestiae blanditiis unde similique, illum consequuntur recusandae.
        </Typography>
        <Stack direction="row" spacing={8}>
      <StyledPaper square={false}>
      <Stack component="form"  sx={{ width: '35ch',}}
      spacing={2}
      noValidate
      autoComplete="off"
    >
        <TextField
        placeholder="Please enter your name"
        id="demo-helper-text-aligned"
        label="Name"
       />
       <TextField
       placeholder="Enter your phone number"
       id="demo-helper-text-aligned"
       label="Phone"
      />
      <TextField
       placeholder="Enter your e-mail"
       id="demo-helper-text-aligned"
       label="Email"
      />
      <br></br>
       </Stack>
       <Stack component="form"  sx={{ width: '30ch',height:'100ch',borderBottom:'80%'}}
      spacing={4}
      noValidate
      autoComplete="off"
    ><TextField
    id="outlined-multiline-static"
    label="message"
    multiline
    rows={5} />
    <Button variant="contained">Get Started</Button>
    </Stack>
       </StyledPaper>
    </Stack>
      </div>
    </div>
  );
}

export default Assp;
