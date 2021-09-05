import React from 'react';
import './StoreDownload.scss';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import {SendEvent} from "components/sendAnalytics"
import { useSelector } from "react-redux";

function StoreDownload() {
  const headlineSize = '2.5vw';
  const textMaxWidth = '50vw';
  const siteOrientation = useSelector((state) => state.siteOrientation);

  return (
    <>
      <div className={'store__background__image'}>
        <div className='store__hero__section'>
          <div className='store__container'>
            <div className='store__row'>
              <div className='store__col'>
                <div
                  className='store__text__wrapper'
                  style={{ maxWidth: textMaxWidth }}
                >
                  <h1
                    className='store__heading'
                    style={{ fontSize: headlineSize }}
                  >
                    <FormattedMessage id="store__heading"></FormattedMessage>
                  </h1>
                </div>
              </div>
            </div>
            <div className='store__row'>
              <div className='store__col'>
                <div className='public__seperator__purple__wrapper'>
                  <img
                    src={'images/StoreSeperator.webp'}
                    alt={'headline seperator golden star'}
                    className='public__seperator__purple'
                  />
                </div>
              </div>
            </div>
            <div className='store__row'>
              <div className='store__col'>
                <Link 
                to='/contactus'
                onClick={()=>SendEvent("Store Download","android",siteOrientation,false)}
                >
                  <div className='store__android__button'></div>
                </Link>
              </div>
              <div className='store__col'>
                <Link 
                to='/contactus'
                onClick={()=>SendEvent("Store Download","apple",siteOrientation,false)}
                >
                  <div className='store__apple__button'></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoreDownload;
