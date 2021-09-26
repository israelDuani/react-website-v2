import React,{ useState } from 'react';
import { Form, Input, Button, Result } from "antd";
import './Families.scss';
import emailjs from 'emailjs-com';
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
import { IsMobileDevice } from "../../components/CoreFunctions";
import { useDispatch } from "react-redux";


function FamiliesForm() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [submitted,setSubmitted] = useState(false)
  const { TextArea } = Input;
  const isMobile = IsMobileDevice()
  const formStyle = {height:isMobile?'8vw':'6vw',marginBottom:isMobile?'3.6vw': '1.6vw'};
  const inputStyle = {maxWidth:isMobile?'45vw':'30vw', borderRadius: '0.4vw',height:isMobile?'8vw':'5vw',fontSize:isMobile?'3.5vw':'2.5vw',paddingLeft: '1vw',borderWidth:'0.2vw' };
  const buttonWrapperStyle = {height:'3.5vw'}
  const SERVICE_ID = "service_6nqyckv";
  const TEMPLATE_ID = 'template_3qz1glf';
  const USER_ID = 'user_HLbY9MMRaZSwGfLM4rUs7';
  const mailPlaceholder = intl.formatMessage({id: "contact-us__form_email_placeholder"})
  const mailErr = intl.formatMessage({id: "contact-us__form_email_err"})
  const confirmationText = intl.formatMessage({id: "families__sucess_title"})
  const returnToHomeText = intl.formatMessage({id: "families__sucess_btn"})



  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values)=> {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID)
      .then((result) => {
      }, (error) => {
          console.log(error.text);
      });
    // console.log(values)
    setSubmitted(true)
  }

  return (
    <>
    {submitted?<Result
        status="success"
        title={confirmationText}
        extra={[
          <Button type="primary" key="returnToHomePage" href="/ContactUs">
            {returnToHomeText}
          </Button>,
        ]}
      />
      :
      <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <div className="families__row_centered">
          <div className="contact--us__col">
            <Form.Item
              style={formStyle}
              name="from_mail"
              rules={[
                { required: true,type: "email", message: mailErr },
              ]}
            >
              <Input placeholder={mailPlaceholder} style={inputStyle}/>
            </Form.Item>
          </div>
          <div className="contact--us__col">
            <Form.Item>
            <Button className="contact--us__btn__blue btn" style={buttonWrapperStyle} type="primary" htmlType="submit">
              <FormattedMessage id="contact-us__form_btn"></FormattedMessage>
            </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
      }
      
    </>
  );
}

export default FamiliesForm;
