import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Sidenav from '../SideNav/Sidenav'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Application.css'
import axios from 'axios';
const Application = () => {


  const [data1, setData1] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/newapp/jobs/')
      .then((res) => {
        setData1(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(data1)
  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];

  return (
    <div>
      <div>

        <div>
          <div className='row'>
            <div className='col-lg-2 col-md-2 col-sm-2'>

              <Sidenav />
            </div>

            <div className='col-lg-10 col-md-10 col-sm-10 ' >
              <Header />
              <div className='main-section'>
                <div className='mt-5 table_data'>
                  <div className='mb-4'>
                    <h2>Job Application</h2>
                  </div>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, border: "1px solid gray" }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">Name</TableCell>
                          <TableCell align="center">Email</TableCell>
                          <TableCell align="center">Contact Number</TableCell>
                          <TableCell align="center">Resume</TableCell>
                          <TableCell align="center">Applied Date</TableCell>

                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data1.map((row) => (
                          <TableRow
                            key={row.full_name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.full_name}
                            </TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.phone_number
                            }</TableCell>
                            <TableCell align="right">{row.resume}</TableCell>

                            <TableCell align="right">{row.apply_date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Application