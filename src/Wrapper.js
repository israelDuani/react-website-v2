import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import English from 'Languages/eng.json';
import Hebrew from 'Languages/heb.json';
import { useSelector } from "react-redux";
import { useEffect } from "react";


const Wrapper = (props) => {
   const newLocale = useSelector((state) => state.language);
   const [locale, setLocale] = useState(newLocale);
   let languageVar = newLocale === "heb" ? Hebrew : English;
   const [messages, setMessages] = useState(languageVar);

  
   useEffect(() => {
    switch(newLocale)
    {
        case('en'):
            languageVar = English;
            break;
        case('heb'):
            languageVar = Hebrew;
            break;
        default:
    }
    setMessages(languageVar)
    setLocale(newLocale)
    if (newLocale === 'en') {
        setMessages(English);
    } else {
        if (newLocale === 'heb'){
            setMessages(Hebrew);
        } else {
            setMessages(English);
        }
    }
   }, [newLocale]);

   return (
        <IntlProvider messages={messages} locale={locale}>
            {props.children}
        </IntlProvider>
   );
}

export default Wrapper;