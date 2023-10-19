import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, makeStyles } from '@mui/material';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export default function Student() {
    const paperStyle = {
        padding: '50px 20px', width: 600, height: 150, display: 'flex',
        justifyContent: 'center', alignItems: 'center', flexDirection: "column", margin: '100px auto'
    }

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [students, setStudents] = useState([])

    const handleClick = (e) => {
        e.preventDefault();
        const student = { name, address };
        console.log(student)

        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("Student ADDED")

            fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            });
        })


    }

    useEffect(() => {
        console.log("hi")
        fetch("http://localhost:8080/student/getAll")
        .then(res => res.json())
        .then((result) => {
            setStudents(result);
        })
        }, [])

    
    return (
        <Container>
            <Paper elevation={10} style={paperStyle} >
                <h1 style={{ color: "blue" }}><u>Add Student</u></h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Student Name" variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />

                    <TextField id="standard-basic" label="Student Address" variant="outlined"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                </Box>
                <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
            </Paper>
            <h1>Students</h1>
            <Paper elevation={7} style={{display:"flex", flexDirection:"column", padding:"50px"}}>
                
                {students.map(student => (
                    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left", display:"flex", flexDirection:"row", cursor:"pointer"}} key={student.id} id={student.id}>
                        Id:{student.id}       
                        Name: {student.name}
                        Address: {student.address}
                        </Paper>
                ))}
                
            </Paper>

        </Container>
    );
}
