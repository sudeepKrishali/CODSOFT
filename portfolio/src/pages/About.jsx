import React from 'react'
import CircularProgress from '../components/CircularProgress'

function About() {
  return (
    <>
    <div className="About-top"></div>
    <div className='About'>
      <div className="About-container">
        <p className='About-para'>I’m Sudeep Krishali, a passionate web developer and technology enthusiast with a deep curiosity for the ever-evolving world of coding. My journey began in 2021, and since then, I’ve cultivated a solid foundation in both front-end and back-end development. I have gained substantial experience in key web technologies, including HTML, CSS, and JavaScript, and I’m proficient in frameworks like React.js and Node.js. My skills extend to working with databases such as MongoDB and SQL, allowing me to build robust and dynamic web applications.In addition to my web development expertise, I possess a strong understanding of Python and Django, further broadening my capabilities as a developer. I’m continually learning and striving to enhance my skill set, always eager to take on new challenges and create impactful digital solutions.</p>
        <div className="About-skills">
          <h2>Frontend web technologies</h2>
         
          <div className="skills">

            <div className="html">
              <CircularProgress percentage={75} color={'#f43f5e'} />
              <p>HTML</p>
            </div>

            <div className="css">
              <CircularProgress percentage={75} color={'#f43f5e'}/>
              <p>CSS</p>
            </div>

            <div className="js">
              <CircularProgress percentage={75} color={'#f43f5e'}/>
              <p>JavaScript</p>
            </div>

            <div className="react">
              <CircularProgress percentage={75} color={'#f43f5e'}/>
              <p>ReactJs</p>
            </div>

          </div>
             
          <h2> Programming Languages</h2>
          <div className="skills">
          <div className="cpp">
              <CircularProgress percentage={75} color={'#2dd4bf'} />
              <p>C++</p>
          </div>

          <div className="JavaScript">
              <CircularProgress percentage={75} color={'#2dd4bf'}/>
              <p>JavaScript</p>
          </div>

          <div className="python">
              <CircularProgress percentage={75} color={'#2dd4bf'}/>
              <p>Python</p>
          </div>
          </div>
          
           <h2>Backend web technologies</h2>
          <div className="skills">
          <div className="nodejs">
              <CircularProgress percentage={75} color={'#facc15'} />
              <p>nodejs</p>
          </div>

          <div className="Django">
              <CircularProgress percentage={75} color={'#facc15'}/>
              <p>Django</p>
          </div>

          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default About
