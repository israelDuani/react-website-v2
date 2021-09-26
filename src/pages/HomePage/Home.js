import React,{useEffect} from 'react';
import HeroSection from './sections/HeroSection';
import StoreDownload from './sections/StoreDownload';
import WhatYouGet from './sections/WhatYouGet';
import { homeIntro, homeIdea, homeGetStarted, homeFeaturesIntro,homeObjFeaturesWeb,homeObjFeaturesApp } from './Data';
import Pricing from './sections/Pricing';
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import ReactGA from 'react-ga';
import { useSelector } from "react-redux";
import {SendEvent,SendPageLoad} from "components/sendAnalytics"


function Home() {
  const intl = useIntl();
  const siteOrientation = useSelector((state) => state.siteOrientation);
  document.title = intl.formatMessage({id: "route-title_home"});
  const dispatch = useDispatch();
  useEffect(()=>
  {
    dispatch({
      type: "SET_TAB",
      payload: `/`,
    });
    SendPageLoad(window.location.pathname);
    SendEvent('Page Load','Home load',siteOrientation,true)
  
  },[])
  

  return (
    <>
      <HeroSection {...homeIntro} />
      <HeroSection {...homeIdea} />
      <HeroSection {...homeGetStarted} />
      <HeroSection {...homeFeaturesIntro} />
      <WhatYouGet {...homeObjFeaturesWeb} />
      <WhatYouGet {...homeObjFeaturesApp} />
      {/* <Pricing /> */}
      <StoreDownload />
    </>
  );
}

export default Home;
