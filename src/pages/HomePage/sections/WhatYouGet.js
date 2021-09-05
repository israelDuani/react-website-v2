import React from 'react';
import './WhatYouGet.scss';
import CheckListItem from './CheckListItem';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import {SendEvent} from "components/sendAnalytics"


function WhatYouGet({
  img,
  alt,
  imgStart,
  haveButton,
  featuresIds
}) {
  const imagePath = img != null ? img : '';
  const textMaxWidth = '50vw';
  const siteOrientation = useSelector((state) => state.siteOrientation);
  return (
    <>
      <div className={'features__section'}>
        <div className='features__container'>
          <div
            className='features__row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
              justifyContent: 'center'
            }}
          >
            <div className='features__col' style={{flexBasis:'50%'}}>
              <div className='features__text__wrapper' style = {{maxWidth:` ${textMaxWidth} `}}>
                {featuresIds.map((idElement) =>
                (
                  <CheckListItem {...{text:<FormattedMessage id={idElement}></FormattedMessage>}} key={idElement} />
                ))}
                
                </div>
            </div>
            {imagePath ?
              <div className='features__col'>
                <div className='features__img__wrapper'>
                  <img src={imagePath} alt={alt} className='features__img' />
                </div>
              </div>
              :<div></div> }
          </div>
          <div
            className='features__row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
              justifyContent: 'center'
            }}>
            {haveButton ? 
                <Link to='/contactus'>
                  <button className='btn features__btn__blue' onClick={()=>SendEvent("Button Clicked",'what you get',siteOrientation,false)}>
                    <FormattedMessage id="what-you-get__button_sign_up"></FormattedMessage>
                  </button>
                </Link>
                : <div></div>}
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default WhatYouGet;
