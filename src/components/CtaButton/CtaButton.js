import React from 'react'
import ModalButton from '../ModalButton/ModalButton'

 const CtaButton = (props) => {

    const { CtaButton__h1, CtaButton__button } = props.db
    return (
      <div className="CtaButton">
            <div className="CtaButton__h1">{CtaButton__h1}</div>
          
            <ModalButton classNames="CtaButton__button" btntext={CtaButton__button}  />
      </div>
    )
  }

export { CtaButton }
