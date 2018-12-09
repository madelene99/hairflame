import React, { Component } from 'react'
import { Carousel  } from 'antd'
import { TitleHr } from '../TitleHr/index.js'

export default class Testemonials extends Component {



  render(){
  const {Testemonials_h1, comment4_img, comment4_p1, comment4_p2, comment4_name, comment3_img, comment3_p1, comment3_p2, comment3_name, comment2_img, comment2_p1, comment2_p2, comment2_name, comment1_p1, comment1_p2, comment1_p3, comment1_img, comment1_name} = this.props.db


    return(
      <div className="Testemonials">
      <section>
        <TitleHr h1={Testemonials_h1} />

        <Carousel autoplay>
        <div>
           <img src={comment3_img} alt="Comment 1" />
           <p>{comment3_p1}</p>

           <p style={{"fontWeight":"Bold"}}>{comment3_p2}</p>
           <p className="CommentName">{comment3_name}</p>
        </div>
       <div>
          <img src={comment1_img} alt="Comment 1" />
          <p>{comment1_p1}</p>
          <p>{comment1_p2}</p>
          <p style={{"fontWeight":"Bold"}}>{comment1_p3}</p>
          <p className="CommentName">{comment1_name}</p>
       </div>
       <div>
          <img src={comment2_img} alt="Comment 1" />
          <p>{comment2_p1}</p>

          <p style={{"fontWeight":"Bold"}}>{comment2_p2}</p>
          <p className="CommentName">{comment2_name}</p>
       </div>

       <div>
          <img src={comment4_img} alt="Comment 1" />
          <p>{comment4_p1}</p>

          <p style={{"fontWeight":"Bold"}}>{comment4_p2}</p>
          <p className="CommentName">{comment4_name}</p>
       </div>
      </Carousel>
</section>
    </div>
  )
}

}
