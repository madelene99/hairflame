import React from 'react'
import { TitleHr } from '../TitleHr/index.js'

const Effects =(props)=>{
const{Effects__h1, Effects__img_1, Effects__h1_2, Effects__h2_1, Effects__p1_1, Effects__p2_1, Effects__p3_1,  Effects__img_2, Effects__h2_2, Effects__p1_2, Effects__p2_2 } = props.db
    return (
      <div className="Effects">
          <section>

                    <TitleHr h1={Effects__h1} />

                  <div className="Effects__img">
                    <img src={Effects__img_1} alt="effects"/>
                  </div>

                  <div className="HowItWorks__h2">{Effects__h2_1}</div>
                  <div className="HowItWorks__p">{Effects__p1_1}</div>
                  <div className="HowItWorks__p">{Effects__p2_1}</div>
                  <div className="HowItWorks__p yellow">{Effects__p3_1}</div>


                   <TitleHr h1={Effects__h1_2} />

                  <div className="Effects__img">
                      <img src={Effects__img_2} alt="effects"/>
                  </div>

                  <div className="HowItWorks__h2">{Effects__h2_2}</div>
                  <div className="HowItWorks__p">{Effects__p1_2}</div>
                  <div className="HowItWorks__p yellow">{Effects__p2_2}</div>

          </section>
      </div>
    )
  }


export  { Effects }
