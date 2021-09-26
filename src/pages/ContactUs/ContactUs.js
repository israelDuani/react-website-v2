import React,{ useEffect } from 'react';
import TopSection from 'components/TopSection';
import ContactForm from './ContactForm';
import './ContactUs.scss';
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { LANGUAGE_TYPE } from "constants/Constants";
import ReactGA from 'react-ga'
import {SendEvent,SendPageLoad} from "components/sendAnalytics"


function ContactUs() {
  const dispatch = useDispatch();
  const intl = useIntl();
  document.title = intl.formatMessage({id: "route-title_contact_us"});
  const topSectionInfo = {headline:intl.formatMessage({id: "route-title_contact_us"})}
  const siteOrientation = useSelector((state) => state.siteOrientation);
  const textWrapperAlign = (siteOrientation === LANGUAGE_TYPE.ENGLISH ? 'left' : 'right');
 
  useEffect(() => {
    dispatch({ 
      type: "SET_TAB",
      payload: `/contactus`,
    });
    SendPageLoad(window.location.pathname);
    SendEvent('Page Load','Contact Us load',siteOrientation,true)
  }, []);
  
  return (
    <>
      <TopSection {...topSectionInfo}/>
      <div className={'contact--us__background'}>
      <div className={'contact--us__container'}>
          <div className='contact--us__row'>
                <div className='contact--us__text__wrapper'>
                  <h1 className={'contact--us__heading dark'} style = {{textAlign: textWrapperAlign }}>
                    <FormattedMessage id="contact-us__heading"></FormattedMessage>
                  </h1>
                  <p className={'contact--us__subtitle dark'} style = {{textAlign: textWrapperAlign }}>
                    <FormattedMessage id="contact-us__subtitle"></FormattedMessage>
                  </p>
            </div>
            <ContactForm/> 
          </div>
        </div>
    </div>
    </>
  );
}

export default ContactUs;
