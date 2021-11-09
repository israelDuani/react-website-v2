import React from 'react';
import ReactGA from 'react-ga';

const isOn = true;

export function SendEvent(eventName,referenceLocation,siteOrientation,isInteract) {
    if(isOn)
    {
        ReactGA.event({
            category: eventName,
            action: referenceLocation,
            label: siteOrientation,
            nonInteraction: isInteract
            });
    }
}

export function SendPageLoad(pageName) {
    if(isOn)
    {
    ReactGA.pageview(pageName)
    }
  }

