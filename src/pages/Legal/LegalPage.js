import React,{ useEffect } from 'react';
import TopSection from 'components/TopSection';
import { PrivacyPolicyEn, PrivacyPolicyHeb,TermsOfUseEn,TermsOfUseHeb} from './Data';
import '../AboutUs/AboutUs.scss';
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { LANGUAGE_TYPE } from "constants/Constants";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import ReactGA from 'react-ga';
import {SendEvent,SendPageLoad} from "components/sendAnalytics"


function LegalPage() {
  const dispatch = useDispatch();
  const intl = useIntl();
  
  const siteOrientation = useSelector((state) => state.siteOrientation);
  const textWrapperAlign = (siteOrientation === LANGUAGE_TYPE.ENGLISH ? 'left' : 'right');
  
  const dataMap = new Map()
  dataMap.set("/legal/privacypolicy/en",PrivacyPolicyEn)
  dataMap.set("/legal/privacypolicy/heb",PrivacyPolicyHeb)
  dataMap.set("/legal/termsofuse/en",TermsOfUseEn)
  dataMap.set("/legal/termsofuse/heb",TermsOfUseHeb)
  
  const actualContent = dataMap.get(window.location.pathname)
  document.title = actualContent.title
  const topSectionInfo = {headline:actualContent.title}

  useEffect(() => {
    dispatch({
      type: "SET_TAB",
      payload: `/legal`,
    });
    //SendPageLoad(window.location.pathname);
    //SendEvent('Page Load','About Us load',siteOrientation,true)
  }, []);
  return (
    <>
      <TopSection {...topSectionInfo}/>
      <div className={'about--us__background'}>
      <div className={'about--us__container'}>
          <div className='about--us__row'>
            <div className='about--us__text__wrapper'>
                <p className={'about--us__subtitle dark'}  style = {{textAlign: actualContent.direction }}>
                {actualContent.content}
                </p>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default LegalPage;
