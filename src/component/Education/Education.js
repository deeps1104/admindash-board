import React, { useState } from 'react'
import Sidenav from '../SideNav/Sidenav';
import Header from '../Header/Header';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Education = () => {
  const [value, setValue] = useState(null);
  return (
    <div>
      <div>
        <div className='row'>
          <div className='col-lg-2 col-md-2 col-sm-2'>
            <Sidenav />
          </div>
          <div className='col-lg-10 col-md-10 col-sm-10 ' >
            <Header />
            <div className='mt-5 pt-5'>
              <div className='mb-4'>
                <h2>Add Education Model</h2>
              </div>
              <div style={{ marginLeft: '120px', textAlign: "left" }}>
                <div className='row mt-5'>
                  <div className='col-lg-2 col-md-2 col-sm-12'>
                    <p>User Name : &nbsp;</p>
                  </div>

                  <div className='col-lg-10 col-md-10 col-sm-12'>
                    <input type="text" className='form-control' style={{ width: "40%" }} />
                  </div>
                </div >
                <div className='row mt-4'>
                  <div className='col-lg-2 col-md-2 col-sm-12'>
                    <p>School name : </p>
                  </div>

                  <div className='col-lg-10 col-md-10 col-sm-12'>
                    <input type="text" className='form-control' style={{ width: "40%" }} />
                  </div>
                </div >
                <div className='row mt-4'>
                  <div className='col-lg-2 col-md-2 col-sm-12'>
                    <p>School location: </p>
                  </div>

                  <div className='col-lg-10 col-md-10 col-sm-12'>
                    <input type="text" className='form-control' style={{ width: "40%" }} />
                  </div>
                </div >
                <div className='row mt-4'>
                  <div className='col-lg-2 col-md-2 col-sm-12'>
                    <p>Degree:</p>
                  </div>
                  <div className='col-lg-10 col-md-10 col-sm-12'>
                    <input type="text" className='form-control' style={{ width: "40%" }} />
                  </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-lg-2 col-md-2 col-sm-12'>
                    <p>Field of study: </p>
                  </div>
                  <div className='col-lg-10 col-md-10 col-sm-12'>
                    <input type="text" className='form-control' style={{ width: "40%" }} />
                  </div>
                </div >
                <div className='row mt-4'>
                  <div className='col-lg-2 col-md-2 col-sm-12'>
                    <p>Start date: </p>
                  </div>
                  <div className='col-lg-10 col-md-10 col-sm-12'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </div>
                </div >
                <div className='row mt-4'>
                  <div className='col-lg-2 col-md-2 col-sm-12'>
                    <p>End date: </p>
                  </div>
                  <div className='col-lg-10 col-md-10 col-sm-12'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </div>
                </div >  
              </div>
              <div style={{ textAlign: "end", margin: "10px" }}>
                <button type="button" class="btn btn-primary save-btn" >Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education