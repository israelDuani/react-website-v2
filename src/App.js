import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import './PublicCSS.scss'
import Home from 'pages/HomePage/Home'
import QAsection from 'pages/QA/QA'
import QAunderDev from 'pages/QA/QAunderDev'
import Tutorial from 'pages/Tutorial/Tutorial'
import AboutUs from 'pages/AboutUs/AboutUs'
import ContactUs from 'pages/ContactUs/ContactUs'
import Families from 'pages/Families/Families'
import { BrowserRouter as Router,Redirect, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from 'Wrapper';
import ScrollToTop from './components/ScrollToTop';
import 'typeface-galada';
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App(props) {
  const locale = navigator.language;
  // ReactGA.initialize('UA-205149126-1')

  
  const siteOrientation = useSelector((state) => state.siteOrientation);
  useEffect(() => {
    //document.documentElement.dir = siteOrientation
    document.getElementsByTagName("html")[0].setAttribute("dir", siteOrientation);
  }, [siteOrientation]);
  return (
    // <IntlProvider
    // messages={props.locale == "en" ? english : hebrew}
    // locale={props.locale ? props.locale : "en"}
    // >
    <Wrapper>
      <Router>
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/QA' component={QAunderDev} />
          <Route path='/Tutorial' component={Tutorial} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/ContactUs' component={ContactUs} />
          <Route path='/families' component={Families} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
        </ScrollToTop>
      </Router>
    </Wrapper>
  );
}

export default App;
