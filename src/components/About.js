import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
       <div className='container'>
        <div className='row py-5'>
          <div className='col-md-6'>
            <h1>About us</h1>
            <p className='lead'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
               It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary">Contact Us</NavLink>
          </div>
          <div className='col-md-6'>
            <img src='/images/about.jpg' height="450px" width="600px" style={{borderRadius:"10px"}}/>
          </div>
        </div>
        </div> 
    </>
  )
}

export default About
