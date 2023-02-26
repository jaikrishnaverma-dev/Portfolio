import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero_wrapper">
      <div className="hero_half hero--left">
        <div className="back_cover">
<img src="logo512.png" alt="" className="profileimg" />
        </div>
      </div>
      <div className="hero_half hero--right">
        <p>Hi I'm</p>
        <h1>Jai Krishna Verma</h1>
        <h3>Full Stack Developer</h3>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid aspernatur quae commodi voluptates. A omnis itaque illum magni corporis.</span>
        <span>
            <i class="bi bi-github"></i>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-envelope-at"></i>
            </span>
      </div>
    </div>
  )
}

export default Hero