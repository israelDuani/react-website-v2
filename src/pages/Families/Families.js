import React,{ useEffect } from 'react';
import TopSection from 'components/TopSection';
import FamiliesForm from './FamiliesForm';
import './Families.scss';
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { LANGUAGE_TYPE } from "constants/Constants";
import ReactGA from 'react-ga'
import {SendEvent,SendPageLoad} from "components/sendAnalytics"


function Families() {
  const dispatch = useDispatch();
  const intl = useIntl();
  document.title = intl.formatMessage({id: "route-title_famelies"});
  const topSectionInfo = {headline:intl.formatMessage({id: "route-title_famelies"})}
  const siteOrientation = useSelector((state) => state.siteOrientation);
  const textWrapperAlign = (siteOrientation === LANGUAGE_TYPE.ENGLISH ? 'left' : 'right');
 
  useEffect(() => {
    dispatch({ 
      type: "SET_TAB",
      payload: `/famelies`,
    });
    SendPageLoad(window.location.pathname);
    SendEvent('Page Load','mimi for families load',siteOrientation,true)
  }, []);
  
  return (
    <>
      <TopSection {...topSectionInfo}/>
      <div className={'families__background'}>
      <div className={'families__container'}>
          <div className='families__row'>
                <div className='families__text__wrapper'>
                  <h1 className={'families__heading dark'} style = {{textAlign: textWrapperAlign }}>
                    <FormattedMessage id="families__heading"></FormattedMessage>
                  </h1>
                  <p className={'families__subtitle dark'} style = {{textAlign: textWrapperAlign }}>
                    <FormattedMessage id="families__subtitle"></FormattedMessage>
                  </p>
            </div>
            <FamiliesForm/> 
          </div>
        </div>
    </div>
    </>
  );
}

export default Families;
