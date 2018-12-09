import React from 'react'
import { TitleHr } from '../TitleHr/index.js'

const HairGrowRate = (props) =>{
  const {HairGrowRate_h1, HairGrowRate_p, HairGrowRate_p2, HairGrowRate_img } = props.db
    return (
      <div className="HairGrowRate">
         <section>
            <TitleHr h1={HairGrowRate_h1} />
            <div className="HairGrowRate__img">
              <img src={HairGrowRate_img} alt="Does your hair grow"/>
            </div>

            <div className="HowItWorks__p">{HairGrowRate_p}</div>
            <div className="HowItWorks__p yellow">{HairGrowRate_p2}</div>

         </section>
      </div>
    )
  }


export { HairGrowRate }
