import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import {SendEvent} from "components/sendAnalytics"
import { useSelector } from "react-redux";
import { useIntl } from "react-intl";


function Footer() {
  const intl = useIntl();
  const siteOrientation = useSelector((state) => state.siteOrientation);
  const termsUrl = intl.formatMessage({id: "footer__terms_url"});
  const privacyUrl = intl.formatMessage({id: "footer__privacy_url"});
  return (
    <div className='footer__background__image'>
    <div className='footer__container'>
      <div className='footer__offers__container'>
        <div className='footer__offer__wrapper'>
          <div className='footer__offer__text'>
          <FormattedMessage id="footer__offer_sign_up"></FormattedMessage>
          </div>
          <Link to='/contactus'>
            <button className='btn footer__offer__btn' onClick={()=>SendEvent("Button Clicked",'footer sign up',siteOrientation,false)}>
              <FormattedMessage id="footer__sign_up_btn"></FormattedMessage>
            </button>
          </Link>
        </div>
        <div className='footer__offer__wrapper'>
          <div className='footer__offer__text'>
            <FormattedMessage id="footer__offer_contact_us"></FormattedMessage>
          </div>
          <Link to='/contactus'>
            <button className='btn footer__offer__btn' onClick={()=>SendEvent("Button Clicked",'footer contact us',siteOrientation,false)}>
              <FormattedMessage id="footer__contact_us_btn"></FormattedMessage>
            </button>
          </Link>
        </div>
      </div>
      <section className='footer__bottom__line'>
        <div className='footer__bottom__line__wrapper'>
          <Link to='/' className='footer__logo__wrapper'>
            <img src={'images/mimi_logo_no_text.webp'} alt={'mimi logo'} className='footer__logo' />
            <FormattedMessage id="footer__logo"></FormattedMessage>
          </Link>
          <small className='footer__website__copyright'>MIMI © 2021</small>
          <div className='website__files__links__container'>
            <Link
              className='website__file__link'
              to={{pathname:termsUrl}}
              target='_blank'
              onClick={()=>SendEvent("Legal Click","terms of use",siteOrientation,false)}
            >
              <FormattedMessage id="footer__terms_of_use"></FormattedMessage>
            </Link>
            <Link
              className='website__file__link'
              to={{pathname: privacyUrl}}
              target='_blank'
              onClick={()=>SendEvent("Legal Click","privacy policy",siteOrientation,false)}
            >
              <FormattedMessage id="footer__privacy_policy"></FormattedMessage>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Footer;
