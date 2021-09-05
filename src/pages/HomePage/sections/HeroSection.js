import React from 'react';
import './HeroSection.scss';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { LANGUAGE_TYPE } from "constants/Constants";
import { FormattedMessage } from "react-intl";
import ReactGA from 'react-ga';
import {SendEvent} from "../../../components/sendAnalytics"
  
function HeroSection({
  backgroundPath,
  sectionName,
  sectionImgPath,
  sectionImgAlt,
  imageDirection,
  imageTopMargin,
  topLine,
  headline,
  description,
  topLineHeb,
  headlineHeb,
  descriptionHeb,
  centerContentText,
  headlineSize,
  contentSize,
  textMaxWidth,
  lightText,
  lightTextDesc,
  buttonLabelId,
  btnType,
  btnClickPath,
  seperatorPath,
}) {

  const siteOrientation = useSelector((state) => state.siteOrientation);
  const contentSizeCt = contentSize != null ? contentSize : '1.34vw';
  const headlineSizeCt = headlineSize != null ? headlineSize : '3.5vw';
  const textMaxWidthCt = textMaxWidth != null ? textMaxWidth : '100%';
  const imgTopMargin = imageTopMargin != null ? imageTopMargin : '0px';
  const imageDirectionCt = imageDirection === 'left' ? 'row-reverse' : 'row';
  const marginTopOfSection = sectionName == 'hero__intro__section' ? '4vw' : '0vw';
  const textWrapperAlign = centerContentText ? centerContentText : (siteOrientation === LANGUAGE_TYPE.ENGLISH ? 'left' : 'right');
  const descTextColor = lightTextDesc ? 'hero__subtitle' : 'hero__subtitle dark';
  const titleTextColor = lightText ? 'hero__heading' : 'hero__heading dark';

  const finalTopline = (siteOrientation === LANGUAGE_TYPE.ENGLISH) ? topLine : topLineHeb
  const finalHeadline = (siteOrientation === LANGUAGE_TYPE.ENGLISH) ? headline : headlineHeb
  const finalDescription = (siteOrientation === LANGUAGE_TYPE.ENGLISH) ? description : descriptionHeb
  
  return (
    <>
    <div className={` ${backgroundPath} `}>
      <div className={` ${sectionName} `}>
        <div className='hero__container' style={{marginTop: marginTopOfSection}}>
          <div className='hero__row' style={{flexDirection: imageDirectionCt}}>
            <div className='hero__col' style={{flexBasis:sectionImgPath ? '50%' : '100%'}}>
              <div className='hero__text__wrapper' style = {{maxWidth:` ${textMaxWidthCt} `,textAlign: textWrapperAlign }}>
                <div className='hero__topline'>{finalTopline}</div>
                  <h1 className={titleTextColor} style = {{fontSize:` ${headlineSizeCt} `}}>
                    {finalHeadline}
                  </h1>
                  {seperatorPath ?
                    <div className='public__seperator__purple__wrapper'>
                      <img src={seperatorPath} alt={sectionImgAlt} className='public__seperator__purple'/>
                    </div> 
                    : <></>}
                  <p className={descTextColor} style = {{fontSize:` ${contentSizeCt} `}}>
                    {finalDescription}
                  </p>
                  {buttonLabelId?
                  <Link to={btnClickPath}>
                    <button className={btnType} onClick={()=>SendEvent("Button Clicked",finalHeadline,siteOrientation,false)}>
                      <FormattedMessage id={buttonLabelId}></FormattedMessage>
                      </button>
                  </Link>
                  :<></>
                  }
              </div>
            </div>
            {sectionImgPath ?
              <div className='hero__col'>
                <div className='hero__img__wrapper' style={{marginTop: imgTopMargin}}>
                  <img src={sectionImgPath} alt={sectionImgAlt} className='hero__img' />
                </div>
              </div>
              :<></> }
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default HeroSection;
