import React from 'react'
import { TitleHr } from '../TitleHr/index.js'

const HowItWorks = (props) => {
  const{HowItWorks__h1, HowItWorks__p,  timeblocks }=props.db

 let farray = [1,2,3]

  const TimeBlocker = farray.map((number, index) => {
          return (
            <div className="time-block" key={index}>
                  <div className="time-block__img">
                    <img src={timeblocks[number].block__img} alt="days"/>
                  </div>
                  <div className="time-block__p yellow">{timeblocks[number].block__p}</div>
            </div>
          )
  })


    return (
      <div className="HowItWorks">
         <section>
            <TitleHr h1={HowItWorks__h1} />
            <div className="HowItWorks__p">{HowItWorks__p}</div>

              <div className="time-blocks">
                  {TimeBlocker}
              </div>
         </section>
      </div>
    )
  }


export { HowItWorks }
