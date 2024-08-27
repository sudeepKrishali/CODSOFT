import React from 'react'

function Resume() {
  return (
    <>
      <div className="resume-top"></div>
      <div className="resume">

        <div className="resume-container">
          <div className="resume-name">
            <h1>Sudeep Krishali</h1>
            <h2>Dehradun, Uttrakhand, India</h2>
          </div>
          <div className="resume-social">
            <p>Email-id : sudeepkrishali@gmail.com</p>
            <p>LinkedIn : <a target='_blank' href="https://www.linkedin.com/in/sudeep-krishali-68470731b">https://www.linkedin.com/in/sudeep-krishali-68470731b</a> </p>
            <p>Mobile No. : +91 9458351063</p>
         </div>

         <div className="education">
          <h2>EDUCATION QUALIFICATION</h2>
         <table>
          <thead>
            <tr>
              <th>Examination</th>
              <th>University/Board/School</th>
              <th>Year</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Graduation </td>
               <td><p>B.Tech (CSE)</p> <p>Graphic Era Hill University, Dehradun</p> </td>
               <td>2024(ongoing)</td>
               <td>7.9 (cgpa)</td>
            </tr>
            <tr>
              <td>Intermediate </td>
               <td><p>CBSE board</p> <p>The Horizon School, Uttrakhand</p> </td>
               <td>2021</td>
               <td>78%</td>
            </tr>
            <tr>
              <td>High School</td>
               <td><p>CBSE board</p> <p>The Horizon School, Uttrakhand</p> </td>
               <td>2019</td>
               <td>86%</td>
            </tr>
          </tbody>
         </table>
         </div>

         <div className="resume-skills">
          <h2>TECHNICAL SKILLS</h2>
          <ul className='resume-list'>
            <li><p><strong>Programming language: </strong>C , C++ , HTML , CSS , JavaScript, Python</p></li>
            <li><p><strong>Web technology: </strong>Reactjs, Nodejs, expressjs</p></li>
            <li><p><strong>Database: </strong>mongodb, sql</p></li>
            <li><p><strong>Software: </strong> VS code, MS Office, Ms PowerPoint, git/github</p></li>
          </ul>
         </div>

         <div className="resume-projects">
          <h2>PROJECTS</h2>
            <ul className='resume-list'>
              <li>Book store website using Mern stack</li>
              <li>News app using reactjs</li>
              <li>cloud notebook using mern stack </li>
            </ul>
         </div>

         <div className="resume-hobbies">
          <h2>HOBBIES</h2>
          <ul className='resume-list'>
            <li>Playing football and Basketball</li>
            <li>Reading books</li>
            <li>Listening music</li>
          </ul>
         </div>

         <div className="resume-strengths">
          <h2>STRENGTHS</h2>
          <ul className='resume-list'>
            <li>Good listener</li>
            <li>Goal oriented</li>
            <li>Inquisitive</li>
            <li>Consistent</li>
          </ul>
         </div>

        </div>

      </div>
    </>
  )
}

export default Resume
