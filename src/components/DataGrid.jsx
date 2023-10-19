import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { AppBar, Container, Paper, } from '@mui/material';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ButtonAppBar from './Appbar';


const columns = [
    { field: 'empId', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First Name',
        width: 200,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 200,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
        editable: true,
    },
    {
        field: 'phoneNumber',
        headerName: 'Phone Number',
        width: 200,
        editable: true,
    },
    {
        field: 'assignedTask',
        headerName: 'Assigned Task',
        width: 200,
        editable: true,
    },
    {
        field: 'startTime',
        headerName: 'Start Date',
        width: 200,
        editable: true,
    },
    {
        field: 'endTime',
        headerName: 'End Date',
        width: 200,
        editable: true,
    },
    {
        field: 'password',
        headerName: 'Password',
        width: 200,
        editable: true,
    }



];

export default function DataGridDemo() {



    //localStorage.setItem("isAdmin", isAdmin);
    console.log("Storage ITEM -----", localStorage.getItem("isAdmin"))

    const [rows, setRows] = useState([]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [assignedTask, setAssignedTask] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log("hi")
        fetch("http://localhost:8080/employees/getAllEmployees")
            .then(res => res.json())
            .then((result) => {
                setRows(result);

            })
    }, [])


    const addEmployee = () => {

        const newEmployee = {
            firstName,
            lastName,
            email,
            phoneNumber,
            assignedTask,
            startTime: startDate,
            endTime: endDate,
            password
        };


        fetch('http://localhost:8080/employees/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEmployee),
        })

            .catch((error) => {
                console.error('Error adding employee:', error);
            });
    };
    const paperStyle = {
        padding: '50px 20px', width: "auto", height: "auto", display: 'flex',
        justifyContent: 'center', alignItems: 'center', flexDirection: "column", margin: '100px auto'
    }

    console.log("----------------------------", localStorage.getItem("isAdmin"))

    var adminOrNot = false;
    if (localStorage.getItem("isAdmin") === "true") {
        adminOrNot = true;
    }

    return (
        <>
            <ButtonAppBar></ButtonAppBar>
            {adminOrNot ?

                <div>



                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
                        <div>
                            <Container>
                                <Paper elevation={10} style={paperStyle} >
                                    <h1 style={{ color: "blue" }}><u>Add Employee</u></h1>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '25ch', display: "flex", width: "auto" },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <h2>Employee</h2>
                                        <TextField id="outlined-basic" label="Firstname" variant="outlined"

                                            onChange={(e) => setFirstName(e.target.value)} />

                                        <TextField id="standard-basic" label="Lastname" variant="outlined"

                                            onChange={(e) => setLastName(e.target.value)} />

                                        <TextField id="standard-basic" label="Email" variant="outlined" required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <TextField id="standard-basic" label="Password" variant="outlined" required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <TextField id="standard-basic" label="Phone Number" variant="outlined"
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                        <TextField id="standard-basic" label="Assigned Task" variant="outlined"
                                            onChange={(e) => setAssignedTask(e.target.value)}
                                        />

                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                                <DatePicker label="Start Date" format='YYYY-MM-DD'

                                                    onChange={(date) => setStartDate(date)} />

                                            </DemoContainer>

                                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                                <DatePicker label="End Date" format='YYYY-MM-DD'

                                                    onChange={(date) => setEndDate(date)} />

                                            </DemoContainer>
                                        </LocalizationProvider>



                                    </Box>
                                    <Button variant="contained" color="secondary" onClick={addEmployee}>Submit</Button>
                                </Paper>



                            </Container>
                        </div>

                        <Box sx={{ height: 400, width: '90%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                getRowId={(row) => row.empId}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 5,
                                        },
                                    },
                                }}
                                pageSizeOptions={[5]}
                                checkboxSelection
                                disableRowSelectionOnClick
                            />
                        </Box>
                    </div>
                </div>



                :


                <Box sx={{ height: 400, width: '90%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        getRowId={(row) => row.empId}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>



            }

        </>



    );
}

