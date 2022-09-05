import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@mui/material/Container';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function AddressForm() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Employee Management System
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <br />

      <Container st={3}>
      <Typography variant='h6' gutterBottom>
        Add Employee
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='firstName'
            name='firstName'
            label='First name'
            fullWidth
            autoComplete='given-name'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='lastName'
            name='lastName'
            label='Last name'
            fullWidth
            autoComplete='family-name'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='email'
            name='email'
            label='Email'
            fullWidth
            autoComplete='given-name'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='gender'
            name='gender'
            label='Gender'
            fullWidth
            autoComplete='family-name'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='dob'
            name='dob'
            label='Date of Birth'
            fullWidth
            autoComplete='given-name'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='phoneNo'
            name='phoneNo'
            label='Phone Number'
            fullWidth
            autoComplete='family-name'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='address1'
            name='address1'
            label='Address line 1'
            fullWidth
            autoComplete='shipping address-line1'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='address2'
            name='address2'
            label='Address line 2'
            fullWidth
            autoComplete='shipping address-line2'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='city'
            name='city'
            label='City'
            fullWidth
            autoComplete='shipping address-level2'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='country'
            name='country'
            label='Country'
            fullWidth
            autoComplete='shipping country'
          />
        </Grid>
      </Grid>
    </Container>
    </>
  );
}
