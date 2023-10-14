import React from 'react'
import Product from './Product'
import video from '../assets/video/vid1.mp4'

const Home = () => {
  return (
    <>
       <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner parallax">
          <div className='parrallax-set'>
          <div className="carousel-item active">
            <video src={video} muted autoPlay loop typeof='vid1/mp4' className="d-block w-100" alt="shopping" height="500px"/>
          </div>
          <div className="carousel-item">
            <img src="/images/img1.jpg" className="d-block w-100" alt="shopping" height="500px"/>
          </div>
          <div className="carousel-item">
            <img src="/images/img2.jpg" className="d-block w-100" alt="shopping" height="500px"/>
          </div>
          <div className="carousel-item">
            <img src="/images/img3.jpg" className="d-block w-100" alt="shopping" height="500px"/>
          </div>
          <div className="carousel-item">
            <img src="/images/img4.jpg" className="d-block w-100" alt="shopping" height="500px"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product/>
      </div>
    </>
  )
}

export default Home;
