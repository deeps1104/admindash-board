import React from 'react'
import { useState } from 'react'
import Header from '../Header/Header'
import Sidenav from '../SideNav/Sidenav'
import './Job.css'
import axios from 'axios'

const Job = () => {
  const [job, setJob] = useState("")
  const [description, setDescription] = useState("")
  const [openings, setOpenings] = useState("")
  const [experience, setExperience] = (useState(""))
  const [responsibility, setResponsibility] = useState("")
  const [requirement, setRequirement] = useState("")
  const [benefits, setBenefits] = useState("")
  const [skills, setSkills] = useState("")
  const [posted, setPosted] = useState("")
  const [jobstatus, setJobStatus] = useState("")

  const getJob = (e) => {
    setJob(e.target.value)
  }
  const getDescription = (e) => {
    setDescription(e.target.value)
  }
  const getOpening = (e) => {
    setOpenings(e.target.value)
  }
  const getExperience = (e) => {
    setExperience(e.target.value)
  }
  const getResponsibilites = (e) => {
    setResponsibility(e.target.value)
  }
  const getRequirement = (e) => {
    setRequirement(e.target.value)
  }
  const getBenefits = (e) => {
    setBenefits(e.target.value)
  }
  const getSkills = (e) => {
    setSkills(e.target.value)
  }
  const getPosted = (e) => {
    setPosted(e.target.value)
  }
  const getJobStatus = (e) => {
    setJobStatus(e.target.value)
  }
  let createData = new FormData()
  const newData = (e) => {

    createData.append("job_name", job)
    createData.append("job_description", description)
    createData.append("number_of_openings", Math.abs(openings))
    createData.append("experience_required", Math.abs(experience))
    createData.append("responsibilities", responsibility)
    createData.append("requirement", requirement)
    createData.append("perks_and_benefits", benefits)
    createData.append("skills_required", skills)
    createData.append("posted_by", posted)
    createData.append("job_status", jobstatus)

    axios.post(`http://127.0.0.1:8000/newapp/jobslist/`, createData)
      .then((response) => {
        window.location = "/job"
      }).catch(error => {
        console.log('There was an error!', error);
      })
    console.log(experience)
  }

  return (
    <div>
      <div className='row'>
        <div className='col-lg-2 col-md-2 col-sm-2'>
          <Sidenav />
        </div>
        <div className='col-lg-10 col-md-10 col-sm-10 ' >
          <Header />
          <div className='mt-5 pt-5'>
            <div className='mb-4'>
              <h2>Add Jobs</h2>
            </div>
            <div style={{ marginLeft: '120px', textAlign: "left" }}>
              <div className='row mt-5'>
                <div className='col-lg-2 col-md-2 col-sm-12'>
                  <p>Job Name : &nbsp;</p>
                </div>
                <div className='col-lg-10 col-md-10 col-sm-12'>
                  <input type="text" className='form-control' style={{ width: "40%" }} value={job} onChange={getJob} />
                </div>
              </div >
              <div className='row mt-4'>
                <div className='col-lg-2 col-md-2 col-sm-12'>
                  <p>Job description : </p>
                </div>
                <div className='form-floating col-lg-10 col-md-10 col-sm-12/'>
                  <textarea className="form-control" type="text" style={{ width: "55%" }} onChange={getDescription} />
                </div>
              </div >
              <div className='row mt-4'>
                <div className='col-lg-2 col-md-2 col-sm-12'>
                  <p>Number of openings: </p>
                </div>
                <div className=' col-lg-10 col-md-10 col-sm-12'>
                  <input type="number" onChange={getOpening} />
                </div>
              </div >
              <div className='row mt-4'>
                <div className='col-lg-2 col-md-2 col-sm-12'>
                  <p>Experience required: </p>
                </div>
                <div className='col-lg-10 col-md-10 col-sm-12'>
                  <input type="number" onChange={getExperience} />
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col-lg-2 col-md-2 col-sm-12'>
                  <p>Responsibilities: </p>
                </div>
                <div className='form-floating col-lg-10 col-md-10 col-sm-12'>
                  <textarea type="text" className="form-control" style={{ width: "55%" }} onChange={getResponsibilites} />
                </div>
              </div >
              <div className='row mt-4'>
                <div className='col-lg-2 col-md-2 col-sm-12'>
                  <p>Requirement:</p>
                </div>
                <div className='form-floating col-lg-10 col-md-10 col-sm-12'>
                  <select className='form-select' style={{ width: "21%", height: "50px" }} onChange={getRequirement}>
                    <option value="python">Python Developer</option>
                    <option value="react">React Developer</option>
                  </select>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col-lg-2 col-md-2 col-sm-12'>
                  <p>Perks and benefits:</p>
                </div>
                <div className=' form-floating col-lg-10 col-md-10 col-sm-12'>
                  <textarea type="text" className='form-control' style={{ width: "55%" }} onChange={getBenefits} />
                </div>
              </div >
              <div className='row mt-4'>
                <div className='col-lg-2 col-md-2 col-sm-12'>
                  <p>Skills required:</p>
                </div>
                <div className='col-lg-10 col-md-10 col-sm-12'>
                  <input type="text" className='form-control' style={{ width: "40%" }} onChange={getSkills} />
                </div>
              </div >
              <div className='row mt-4'>
                <div className='col-lg-2 col-md-2 col-sm-12'>
                  <p>Posted by:</p>
                </div>
                <div className='col-lg-10 col-md-10 col-sm-12'>
                  <input type="text" className='form-control' style={{ width: "40%" }} onChange={getPosted} />
                </div>
              </div >
              <div className='row mt-4'>
                <div className='col-lg-2 col-md-2 col-sm-12'>
                  <p>Job status:</p>
                </div>
                <div className=' form-floating col-lg-10 col-md-10 col-sm-12'>
                  <select className='form-select' style={{ width: "21%", height: "50px" }} onChange={getJobStatus}>
                    <option value="text">ACTIVE</option>
                    <option value="text">INACTIVE</option>
                  </select>
                </div>
              </div >
            </div>
            <div style={{ textAlign: "end", margin: "10px" }}>
              <button type="button" class="btn btn-primary save-btn" onClick={newData} >Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Job