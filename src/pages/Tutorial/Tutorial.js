import React from 'react';
import TopSection from 'components/TopSection';
import './Tutorial.scss';
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import ReactGA from 'react-ga';
import { useSelector } from "react-redux";
import {SendEvent,SendPageLoad} from "components/sendAnalytics"

function Tutorial() {
  ReactGA.pageview(window.location.pathname);
  const dispatch = useDispatch();
  dispatch({
    type: "SET_TAB",
    payload: `/tutorial`,
  });
  const intl = useIntl();
  document.title = intl.formatMessage({id: "route-title_tutorial"});
  const sectionImgPath = 'images/underConstruction.webp'
  const topSectionInfo = {headline:intl.formatMessage({id: "route-title_tutorial"})}
  const siteOrientation = useSelector((state) => state.siteOrientation);
  SendPageLoad(window.location.pathname);
  SendEvent('Page Load','Tutorial load',siteOrientation,true)
  return (
    <>
      <TopSection {...topSectionInfo}/>
      <div className={'tutorial__background'}>
      <div className={'tutorial__container'}>
          <div className='tutorial__row'>
            <div className='tutorial__img__wrapper'>
                <img src={sectionImgPath} alt={'sectionImgAlt'} className='tutorial__img' />
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Tutorial;
