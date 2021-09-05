import React from 'react';
import './Pricing.scss';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

function Pricing() {
  const smallPackagePath = 'images/smallPackage.webp';
  const largePackagePath = 'images/bigPackage.webp';
  const smallPackageAlt = 'small package';
  const largePackageAlt = 'large package';

  return (
      <div className='pricing__background__image'>
        <div className='pricing__section'>
          <div className='pricing__wrapper'>
            <h1 className='pricing__heading'>Pricing</h1>
            <div className='pricing__offer__container'>
              <Link to='/sign-up' className='pricing__card__container__blue'>
                <div className='pricing__card__info__container'>
                  <div className='pricing__card__image__wrapper'>
                    <img
                      src={smallPackagePath}
                      alt={smallPackageAlt}
                      className='pricing__card__image'
                    />
                  </div>
                  <div className='pricing__subscribtion__price__title'>
                  <FormattedMessage id="pricing__subscribtion_price_small"></FormattedMessage>
                  </div>
                  <div className='pricing__subscribtion__time__title'>
                  <FormattedMessage id="pricing__subscribtion_time_small"></FormattedMessage>
                  </div>
                </div>
              </Link>
              <Link to='/sign-up' className='pricing__card__container__purple'>
                <div className='pricing__card__info__container'>
                  <div className='pricing__card__image__wrapper'>
                    <img
                      src={largePackagePath}
                      alt={largePackageAlt}
                      className='pricing__card__image'
                    />
                  </div>
                  
                  <div className='pricing__subscribtion__price__title'>
                    <FormattedMessage id="pricing__subscribtion_price_big"></FormattedMessage>
                  </div>
                  <div className='pricing__subscribtion__time__title'>
                    <FormattedMessage id="pricing__subscribtion_time_big"></FormattedMessage>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div> 
  );
}
export default Pricing;
