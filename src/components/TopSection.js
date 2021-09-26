import React from 'react';
import './TopSection.scss';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

  
function TopSection({headline}) {
  const headlineSizeCt = '3.5vw';
  const titleTextColor = 'top--line__heading';
  return (
    <>
    
    <div className={'top--section__background'}>
      <div className={'top--section__container'}>
        <div className='top--section__text__wrapper'>
            <h1 className={titleTextColor} style = {{fontSize:` ${headlineSizeCt} `}}>
                {headline}
            </h1>
        </div>
      </div>
    </div>
  </>
  );
}

export default TopSection;
