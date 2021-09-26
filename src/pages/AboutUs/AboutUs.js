import React,{ useEffect } from 'react';
import TopSection from 'components/TopSection';
import { aboutUsText } from './Data';
import './AboutUs.scss';
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { LANGUAGE_TYPE } from "constants/Constants";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import ReactGA from 'react-ga';
import {SendEvent,SendPageLoad} from "components/sendAnalytics"


function AboutUs() {
  const dispatch = useDispatch();
  const intl = useIntl();
  document.title = intl.formatMessage({id: "route-title_about_us"});
  const siteOrientation = useSelector((state) => state.siteOrientation);
  const textWrapperAlign = (siteOrientation === LANGUAGE_TYPE.ENGLISH ? 'left' : 'right');
  const descTextColor = 'about--us__subtitle dark';
  const titleTextColor = 'about--us__heading dark';
  const seperatorPath= 'images/PurpleSeperatorTwo.webp'
  const sectionImgPath = 'images/Rocket.webp'
  const topSectionInfo = {headline:intl.formatMessage({id: "route-title_about_us"})}

  useEffect(() => {
    dispatch({
      type: "SET_TAB",
      payload: `/aboutus`,
    });
    SendPageLoad(window.location.pathname);
    SendEvent('Page Load','About Us load',siteOrientation,true)
  }, []);
  return (
    <>
      <TopSection {...topSectionInfo}/>
      <div className={'about--us__background'}>
      <div className={'about--us__container'}>
          <div className='about--us__row'>
            <div className='about--us__img__wrapper'>
                <img src={sectionImgPath} alt={'child on a rocket'} className='about--us__img' />
            </div>
                <div className='about--us__text__wrapper'>
                  <h1 className={titleTextColor}>
                    <FormattedMessage id="about-us__headline"></FormattedMessage>
                  </h1>
                    <div className='public__seperator__purple__wrapper'>
                      <img src={seperatorPath} alt={'star seperator'} className='public__seperator__purple'/>
                    </div> 
                  <p className={descTextColor}  style = {{textAlign: textWrapperAlign }}>
                  {
                  siteOrientation === LANGUAGE_TYPE.ENGLISH
                    ? aboutUsText.data
                    : aboutUsText.dataHeb
                  }
                  </p>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default AboutUs;
