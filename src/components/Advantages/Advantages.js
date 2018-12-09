import React  from 'react'
import { TitleHr } from '../TitleHr/index.js'

const Advantages = (props) =>{
  const { HowItWorks__h1, advs } = props.db
   let farray = [1,2,3,4,5,6]

   const AdvantegesBlock = farray.map((number,index) => {
     return(
     <div className="Advantage-block" key={index}>
         <div className="Advantages__img">
              <img src={advs[number].img} alt="Advantage"/>
         </div>
         <div className="Advantages__p">{advs[number].text}</div>
     </div>
     )
   })

    return (
      <div className="Advantages">
          <section>
                  <TitleHr h1={HowItWorks__h1} />
                  <div className="Advantage">

                       {AdvantegesBlock}
                  </div>
          </section>
      </div>
    )
  }

export { Advantages }
