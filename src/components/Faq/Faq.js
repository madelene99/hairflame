import React, { Component } from 'react'
import { Collapse } from 'antd'
import { TitleHr } from '../TitleHr/index.js'

export default class Faq extends Component {



  render(){
  const {Faq_h1, Question, Answers, quest1, quest2, quest3, answer1, answer2, answer3,quest4, quest5, quest6, answer4, answer5, answer6} = this.props.db
    const Panel = Collapse.Panel




const Question1 = <span><b>{Question}</b> {quest1}</span>
const Question2 = <span><b>{Question}</b> {quest2}</span>
const Question3 = <span><b>{Question}</b> {quest3}</span>
const Question4 = <span><b>{Question}</b> {quest4}</span>
const Question5 = <span><b>{Question}</b> {quest5}</span>
const Question6 = <span><b>{Question}</b> {quest6}</span>

const Answer1 = <span><b>{Answers}</b> {answer1}</span>
const Answer2 = <span><b>{Answers}</b> {answer2}</span>
const Answer3 = <span><b>{Answers}</b> {answer3}</span>
const Answer4 = <span><b>{Answers}</b> {answer4}</span>
const Answer5 = <span><b>{Answers}</b> {answer5}</span>
const Answer6 = <span><b>{Answers}</b> {answer6}</span>

    return(
      <div className="Faq">
      <section>
        <TitleHr h1={Faq_h1} />
                <Collapse  >
                     <Panel header={Question1} key="1">
                        <p>{Answer1}</p>
                     </Panel>
                     <Panel header={Question2} key="2">
                        <p>{Answer2}</p>
                     </Panel>
                     <Panel header={Question3} key="3" >
                        <p>{Answer3}</p>

                     </Panel>
                     <Panel header={Question4} key="4" >
                        <p>{Answer4}</p>
                     </Panel>

                     <Panel header={Question5} key="5" >
                        <p>{Answer5}</p>
                     </Panel>

                     <Panel header={Question6} key="6" >
                        <p>{Answer6}</p>
                     </Panel>
           </Collapse>
           </section>
      </div>
    )
  }

}
