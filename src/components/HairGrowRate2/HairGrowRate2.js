import React from 'react'
import { TitleHr } from '../TitleHr/index.js'

const HairGrowRate2 = (props) =>{
  const {HairGrowRate_h1, HairGrowRate_p, HairGrowRate_p2, HairGrowRate_img } = props.db
    return (
      <div className="HairGrowRate">
         <section>
            <TitleHr h1={HairGrowRate_h1} />
            <div className="HairGrowRate__img">
              <img src={HairGrowRate_img} alt="Does your hair grow"/>
              <img src="https://1693021541.rsc.cdn77.org/lands/hairflame/1/c1.jpg" alt="Does your hair grow"/>
              <img src="https://1693021541.rsc.cdn77.org/lands/hairflame/1/c2_1.jpg" alt="Does your hair grow"/>
              <img src="https://1693021541.rsc.cdn77.org/lands/hairflame/1/c3.jpg" alt="Does your hair grow"/>
            </div>

            <div className="HowItWorks__p">{HairGrowRate_p}</div>
            <div className="HowItWorks__p yellow">{HairGrowRate_p2}</div>

         </section>
      </div>
    )
  }


export { HairGrowRate2 }
