import React from 'react'

const Footer = (props) =>{
  const {footer__h1, footer__p1, footer__p2, footer__h1_span} = props.db
    return (
      <div className="Footer">
        <footer>
              <div className="footer__h1">{footer__h1}<span>{footer__h1_span}</span></div>
              <div className="footer__p">{footer__p1}</div>
              <div className="footer__p">{footer__p2}</div>
        </footer>
      </div>
    )
}

export { Footer }
