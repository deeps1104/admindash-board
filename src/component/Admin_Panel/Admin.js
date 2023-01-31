import React, { useEffect, useState } from 'react'
import Sidenav from '../SideNav/Sidenav'
import './Admin.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from '../Header/Header';
import axios from 'axios';

const Admin = () => {
  const[data1,setData1]=useState([])

useEffect(()=>{
  axios.get('http://127.0.0.1:8000/newapp/contect/')
  .then((res)=>{
    setData1(res.data)
  }).catch((err)=>{
console.log(err)
  })
},[])
console.log(data1)
  return (
    <div>

      <div>
        <div className='row'>
          <div className='col-lg-2 col-md-2 col-sm-2'>

            <Sidenav />
          </div>
            
          <div className='col-lg-10 col-md-10 col-sm-10 ' >
            <Header/>
            <div className='main-section'>
            <div className='mt-5 table_data'>
              <div className='mb-4'>
                <h2>Our Contacts</h2>
              </div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 950, border: "1px solid gray" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">Contact Number</TableCell>
                      <TableCell align="center">Message</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data1.map((row) => (
                      
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell scope="row" align="center">
                          {row.name}
                        </TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                        <TableCell align="center">{row.phone_number}</TableCell>
                        <TableCell align="center">{row.message}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            </div>
            {/* <div className='form_list mt-5 pt-5 '>
              <div>
              <p>Name: Bridgefix</p>
            </div> <br />
            <div >
              <p>Contact: 6756534345457</p>
            </div> <br />
            <div >
              <p>Email: test@gmail.com</p>
            </div><br />
            <div >
              <p>Message :-</p>
            </div>
           
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin