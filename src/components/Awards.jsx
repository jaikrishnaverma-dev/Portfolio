import React from 'react'
import { portfolio } from '../centralized_data/datas'
import useElementOnScreen from '../customHook/useElementOnScreen'

const Awards = () => {
    const [containerRef,isVisible]=useElementOnScreen({
        root:null,
        rootMargin:'0px',
        threshold:1.0
    })
  return (
   <>
      <div ref={containerRef} className="award_wrapper">
      <h2 className="title">Skills</h2>
      <p className="sub_title">Here are Some of my skills</p>
{
    portfolio.awards.map(x=><>
    <p>asfsf</p>
    </>)
}
      </div>
   </>
  )
}

export default Awards