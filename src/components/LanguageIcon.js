import React from 'react';
import './LanguageIcon.scss';


export const LanguageIcon = (props) => {
    var logoPath = ''
    switch (props.country) {
        case 'israel':
            logoPath = 'images/israelIcon.webp'
            break;
        case 'usa':
            logoPath = 'images/usaIcon.webp'
            break;
        default:
            console.log(`err 4001`);
    }

  return (
    <img src={logoPath} alt={'country logo'} className='language--icon_img' />
  );
};
