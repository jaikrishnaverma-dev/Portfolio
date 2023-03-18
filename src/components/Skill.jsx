import React from "react";
import useElementOnScreen from "../customHook/useElementOnScreen";
import "./Skill.css";
import Slider from "react-slick";
import { portfolio } from "../centralized_data/datas";
const Skill = () => {
const [containerRef,isVisible]=useElementOnScreen({
    root:null,
    rootMargin:'0px',
    threshold:1.0
})

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,   
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  return (
    <>
      <div ref={containerRef} className="skill_wrapper">
      <h2 className="title">Skills</h2>
      <p className="sub_title">Here are Some of my skills</p>
        <div className={`square ${isVisible?'square-animation ':''}`}>
        <Slider {...settings}>
      { portfolio.skills.map(skill=>
    <div className="skill_card_wrapper">
         <div className="skill_cards">
            <img src={skill.image} alt="" />
            <h3>{skill.title}</h3>
            <p>{skill.experience}</p>
            <small>{skill.company}</small>
          </div>
    </div>
         )}
        </Slider>
        </div>
      </div>
      <p style={{marginTop:'40px'}}></p>
    </>
  );
};

export default Skill;
