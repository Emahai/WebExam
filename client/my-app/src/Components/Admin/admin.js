import React from 'react';
import Typography from '@material-ui/core/Typography';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container, Grid } from '@material-ui/core';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'email',
    headerName: 'Email',
    sortable: false,
    width: 230,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName}${params.row.lastName}@gmail.com`,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
  },
  {
    field: 'phoneNum',
    headerName: 'Phone No.',
    width: 140,
  },
];

const rows = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35,
    status: 'Active',
    phoneNum: '0911223344',
  },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    status: 'Active',
    phoneNum: '0911223344',
  },
  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
    age: 45,
    status: 'Active',
    phoneNum: '0911223344',
  },
  {
    id: 4,
    lastName: 'Stark',
    firstName: 'Arya',
    age: 61,
    status: 'Active',
    phoneNum: '0911223344',
  },
  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: null,
    status: 'Active',
    phoneNum: '0911223344',
  },
  {
    id: 6,
    lastName: 'Melisandre',
    firstName: null,
    age: 50,
    status: 'Active',
    phoneNum: '0911223344',
  },
  {
    id: 7,
    lastName: 'Clifford',
    firstName: 'Ferrara',
    age: 44,
    status: 'Active',
    phoneNum: '0911223344',
  },
  {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
    age: 36,
    status: 'Active',
    phoneNum: '0911223344',
  },
  {
    id: 9,
    lastName: 'Roxie',
    firstName: 'Harvey',
    age: 65,
    status: 'Active',
    phoneNum: '0911223344',
  },
];

export default function Admin() {
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
      <Container>
        <Typography variant='h6' gutterBottom>
          Employee List
        </Typography>

        <br />

        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
        <br />

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Button variant='contained' color='primary'>
              {' '}
              Activate Employees{' '}
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' color='primary'>
              {' '}
              Deactivate employee{' '}
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' color='secondary'>
              {' '}
              Update Employee Info{' '}
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' color='secondary'>
              {' '}
              Delete Employee Info{' '}
            </Button>
          </Grid>
        </Grid>
      </Container>
      <br />
      <Grid item xs={3}>
            <Button variant='contained' color='primary'>
              {' '}
              Add New Employee Info{' '}
            </Button>
          </Grid>
      <br />
      <br />
    </>
  );
}
