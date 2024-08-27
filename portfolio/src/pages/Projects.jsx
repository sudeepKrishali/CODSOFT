import React from 'react'
import Cards from '../components/Cards'

function Projects() {
  return (
    <>
      <div className="Projects-top"></div>
      <div className='projects-container'>
        <div className="projects-grid">
             <Cards image={'portfolio.jpg'} title={'Portfolio website'} desc={'A personal portfolio website to showcase my work, skills, and experience.'} tech={'HTML, CSS, JavaScript, React'}/>
             <Cards image={'newsWeb.jpg'} title={'NEWS website'} desc={'A website which show the daily news feeds related to various genre'} tech={'HTML, CSS, JavaScript, React'}/>
             <Cards image={'blogWeb.jpg'} title={'Blogging website'} desc={'A blogging website to where any user can create an account and post blogs'} tech={'HTML, CSS, JavaScript, React,Nodejs,mongodb'}/>
            
             <Cards image={'taskguide.jpg'} title={'TaskGuide website'} desc={'This website maintains the todo list of users.'} tech={'HTML, CSS, JavaScript, React,nodejs'}/>
             <Cards image={'E-Commerce.webp'} title={'E-Commerce website'} desc={'A website which helps users to buy products online.'} tech={'HTML, CSS, JavaScript, React,nodejs'}/>
             <Cards image={'chatWeb.jpg'} title={'Chatting website'} desc={'A website where people from various places can come and chat'} tech={'HTML, CSS, JavaScript, React,nodejs'}/>
        </div>

      </div>
    </>
  )
}

export default Projects
