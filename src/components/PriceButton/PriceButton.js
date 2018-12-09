import React from 'react'
import ModalButton from '../ModalButton/ModalButton'

 const PriceButton = (props) =>  {

   const { block__p, block__p2, block__button, block__p2_span, block__p_span} = props.db
   return(
              <div className="PriceButton">
              <section>
                  <div className="price-block__p"><span className="price-block__p_line">{block__p}</span> <span>{block__p_span}</span></div>
                  <div className="price-block__p"><span>{block__p2_span}</span> {block__p2}</div>

                   <ModalButton classNames="price-block__button" btntext={block__button}  />
                </section>
              </div>
            )
}
export { PriceButton }
