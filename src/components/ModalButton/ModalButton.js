import React, { Component } from 'react'
import { Modal, Radio, Form, Input, Button } from 'antd';


const FormItem = Form.Item;
const RadioGroup = Radio.Group;


export default class ModalButton extends Component {
  constructor() {
     super();
     this.state = {
       formLayout: 'horizontal',
       visible: false,
       value: 1,
       gart:0,
       gart1:0,
       gart2:0,
       gart3:0,
       gart4:0,
       cid:0,
       best:0,
       trafficsource:0

     };
      this.handleSubmit = this.handleSubmit.bind(this);
   }



 showModal = () => {
   this.setState({
     visible: true,
   });
 }

 handleOk = (e) => {

   this.setState({
     visible: false,
   });
 }

 handleCancel = (e) => {

   this.setState({
     visible: false,
   });
 }

 handleSubmit(event) {
  //alert('A name was submitted: ' + this.state.value);

}



 onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }


  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

componentDidMount() {
  function getURLParameter(name) {
              return decodeURI(
                  (RegExp(name + '=' + '(.+?)(&|$)').exec(document.location.search) || [, null])[1] || ''
              );
          }
       let gart = getURLParameter('adid')
       let gart1 = getURLParameter('adsetname')
       let gart2 = getURLParameter('age')
       let gart3 = getURLParameter('gender')
       let gart4 = getURLParameter('placement')
       let cid = getURLParameter('clickid')
       let best = getURLParameter('best')
       let trafficsource = getURLParameter('trafficsource')
this.setState({"gart":gart, "gart1":gart1, "gart2":gart2, "gart3":gart3, "gart4":gart4,  "cid":cid, "trafficsource":trafficsource,  "best":best  })

}

  render(){
    const radioStyle = {
         display: 'block',
         height: '30px',
         lineHeight: '30px',
       };

    const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
          wrapperCol: { span: 14, offset: 4 },
        } : null;


    const { classNames, btntext } = this.props

      return (
        <div >

            <div className={classNames} onClick={this.showModal}>{btntext}</div>

              <Modal
         title="To place an order simply fill up the form"
         visible={this.state.visible}
         onOk={this.handleOk}
         onCancel={this.handleCancel}
         footer={null}
       >


       <Form layout={formLayout} action="https://hairflame.shop/thanks-hairflame/" method="GET" onSubmit={this.handleSubmit}>

      <FormItem
        label="Name"
        {...formItemLayout}
      >
        <Input  name="name" required="required" />
      </FormItem>

      <FormItem
        label="Phone"
        {...formItemLayout}
      >
        <Input type="number"  name="phone"  required="required" />
      </FormItem>

            <FormItem
              label="City"
              {...formItemLayout}
            >
              <Input  name="city"  required="required" />
            </FormItem>

            <FormItem
              label="Street"
              {...formItemLayout}
            >
              <Input  name="adress1"  required="required"  />
            </FormItem>

            <FormItem
              label="Building number"
              {...formItemLayout}
            >
              <Input  name="building1"  required="required"  />
            </FormItem>

            <FormItem
              label="Apartment number"
              {...formItemLayout}
            >
              <Input  name="adress2"  required="required" />
            </FormItem>


      <FormItem
        label="Quantity"
        {...formItemLayout}
      >


      <RadioGroup onChange={this.onChange} value={this.state.value}>


            <div className="offer-products">
            			<div className="offer-product">
            				<div className="offer__checkbox">
            					    <Radio style={radioStyle}  value={1} />
            				</div>
            				<div className="offer__img">
            					<img  src="https://1693021541.rsc.cdn77.org/lands/hairflame/1/product_smal.png"   alt="" />
            				</div>
            				<div className="offer-description">
            					<div className="offer-title">1 Hair Flame</div>

            					<div className="offer-curr-price">AED 167</div>
                      <div className="offer-prev-price"><span>was AED 207</span> (Save AED 40)</div>


            				</div>
            			</div>

            				<div className="offer-product offerproductlabel" >
            				<div className="offer__checkbox">
            					 <Radio style={radioStyle}  value={2} />
            				</div>
            				<div className="offer__img">
            					<img  src="https://1693021541.rsc.cdn77.org/lands/hairflame/1/product_smal.png" alt="" />
            				</div>
            				<div className="offer-description">
            					<div className="offer-title">2 Hair Flame</div>

            					<div className="offer-curr-price">AED 242</div>

            					<div className="offer-special">AED 121/each   </div>
                      <div className="offer-prev-price"><span>was AED 414</span> (Save AED 172)</div>
            				</div>
            			</div>

                  <div className="offer-product" >
                  <div className="offer__checkbox">
                     <Radio style={radioStyle}  value={3} />
                  </div>
                  <div className="offer__img">
                    <img  src="https://1693021541.rsc.cdn77.org/lands/hairflame/1/product_smal.png" alt="" />
                  </div>
                  <div className="offer-description">
                  <div className="offer-title">3 Hair Flame</div>

                  <div className="offer-curr-price">AED 317</div>
                  <div className="offer-special">AED 105.67/each </div>
                  <div className="offer-prev-price"><span>was AED 621</span> (Save AED 304)</div>
                  </div>
                </div>

            				<div className="offer-product offerproductlabel2">
            				<div className="offer__checkbox">
            				 <Radio style={radioStyle}  value={4} />
            				</div>
            				<div className="offer__img">
            					<img   src="https://1693021541.rsc.cdn77.org/lands/hairflame/1/product_smal.png"   alt="" />
            				</div>
            				<div className="offer-description">
            					<div className="offer-title">4 Hair Flame</div>


            					<div className="offer-curr-price">AED 392</div>

            					<div className="offer-special">AED 98/each </div>
                      <div className="offer-prev-price"><span>was AED 828</span> (Save AED 436)</div>
            				</div>
            			</div>
            		</div>


  </RadioGroup>


      </FormItem>
      <FormItem


      >
        <Input type="hidden" value={this.state.value}  name="quantity" />
      </FormItem>

      <Input type="hidden" id="aff_sub1" className="aff_sub1" name="affsub1" value={this.state.gart} />
       <Input type="hidden" id="aff_sub2" className="aff_sub2" name="affsub2" value={this.state.gart1} />
       <Input type="hidden" id="aff_sub3" className="aff_sub3" name="affsub3" value={this.state.gart2} />
       <Input type="hidden" id="aff_sub4" className="aff_sub4" name="affsub4" value={this.state.gart3} />
       <Input type="hidden" id="aff_sub5" className="aff_sub5" name="affsub5" value={this.state.gart4} />
         <Input type="hidden" id="cid" className="cid" name="cid" value={this.state.cid} />
       <Input type="hidden" id="best" className="best" name="best" value={this.state.best} />
       <Input type="hidden" id="version" className="version" name="version" value="version-hairflame2" />
       <Input type="hidden" id="trafficsource" className="trafficsource" name="trafficsource" value={this.state.trafficsource} />

      <FormItem {...buttonItemLayout} style={{    marginTop: "-20"}}>
          <Button className="price-block__button lastbtn" type="primary" htmlType="submit">Order Now</Button>
      </FormItem>
    </Form>



       </Modal>

        </div>
      )
    }
  }
