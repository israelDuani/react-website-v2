import React,{ useEffect } from 'react';
import { Form, Input, Button, Checkbox } from "antd";
import './ContactUs.scss';
import emailjs from 'emailjs-com';
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
import { IsMobileDevice } from "../../components/CoreFunctions";
import { useDispatch } from "react-redux";


function ContactForm() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { TextArea } = Input;
  const isMobile = IsMobileDevice()
  const formStyle = {height:isMobile?'8vw':'3vw',marginBottom:isMobile?'3.6vw': '1.6vw'};
  const inputStyle = {maxWidth:isMobile?'45vw':'20vw', borderRadius: '0.4vw',height:isMobile?'8vw':'3vw',fontSize:isMobile?'3.5vw':'1.5vw',paddingLeft: '1vw',borderWidth:'0.2vw' };
  const textAreaStyle = {height:isMobile?'8vw':'3vw',borderRadius: '0.4vw',fontSize:isMobile?'3.5vw':'1.5vw',paddingLeft: '1vw',borderWidth:'0.2vw' };
  const wideFormStyle = {flex:1};
  const buttonWrapperStyle = {height:'3.5vw'}
  const SERVICE_ID = "service_6nqyckv";
  const TEMPLATE_ID = 'template_5pdczms';
  const USER_ID = 'user_HLbY9MMRaZSwGfLM4rUs7';
  const namePlaceholder = intl.formatMessage({id: "contact-us__form_name_placeholder"})
  const emailPlaceholder = intl.formatMessage({id: "contact-us__form_email_placeholder"})
  const phonePlaceholder = intl.formatMessage({id: "contact-us__form_phone_placeholder"})
  const subjectPlaceholder = intl.formatMessage({id: "contact-us__form_subject_placeholder"})
  const contentPlaceholder = intl.formatMessage({id: "contact-us__form_content_placeholder"})
  const nameErr = intl.formatMessage({id: "contact-us__form_name_err"})
  const emailErr = intl.formatMessage({id: "contact-us__form_email_err"})
  const subjectErr = intl.formatMessage({id: "contact-us__form_subject_err"})
  const contentErr = intl.formatMessage({id: "contact-us__form_content_err"})

  // useEffect(() => {
  //   dispatch({ 
  //     type: "SET_TAB",
  //     payload: `/contactus`,
  //   });
  // }, []);


  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values)=> {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID)
      .then((result) => {
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <div className="contact--us__row">
          <div className="contact--us__col">
            <Form.Item
              style={formStyle}
              name="from_name"
              rules={[
                { required: true, message: nameErr },
              ]}
            >
              <Input placeholder={namePlaceholder} style={inputStyle}/>
            </Form.Item>
            <Form.Item
              style={formStyle}
              name="from_mail"
              rules={[
                { required: true, message: emailErr },
              ]}
            >
              <Input placeholder={emailPlaceholder} style={inputStyle}/>
            </Form.Item>
          </div>
          <div className="contact--us__col">
            <Form.Item
              style={formStyle}
              name="from_phone"
            >
              <Input placeholder={phonePlaceholder} style={inputStyle}/>
            </Form.Item>
            <Form.Item
              style={formStyle}
              name="subject"
              rules={[
                { required: true, message: subjectErr },
              ]}
            >
              <Input placeholder={subjectPlaceholder} style={inputStyle}/>
            </Form.Item>
            
          </div>
          <div className="contact--us__col">
          <Form.Item
          style={wideFormStyle}
              name="message"
              rules={[
                { required: true, message: contentErr },
              ]}
            >
            <TextArea style={textAreaStyle}
                placeholder={contentPlaceholder}
                autoSize={{ minRows: 3, maxRows: 6 }}/>
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
    </>
  );
}

export default ContactForm;
