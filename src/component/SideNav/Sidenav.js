import React from 'react'
import { Link } from 'react-router-dom'
import './SideNav.css'

export default function Sidenav() {
  return (
    <div className="sidenav">
      <div>
        <Link to='/admin'>Contact</Link>
      </div>
      <div>
        <Link to ="/job">Job</Link>
      </div>
      <div>
        <a href="#">Resumes</a>
      </div>
      <div>
        <a href="#">Applications</a>
      </div>
      <div>
        <a href="/education">Education</a>
      </div>
      <div>
        <a href="#">Skills</a>
      </div>
      <div>
        <a href="/application">Job Application</a>
      </div>
      <div>
        <a href="#">Experience</a>
      </div>

    </div>
  )
}
