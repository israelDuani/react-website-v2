import React from 'react';
import './CheckListItem.scss';
import { useSelector } from "react-redux";
import { LANGUAGE_TYPE } from "constants/Constants";

function CheckListItem({
    text
  }) {
    const siteOrientation = useSelector((state) => state.siteOrientation);
    const textWrapperAlign = siteOrientation === LANGUAGE_TYPE.ENGLISH ? 'left' : 'right';
    return (
      <>
        <div className='checklist__row'>
            <div className='checklist__col'>
                <img src={'images/checkMark.webp'} alt={'check mark'} className='checklist_icon_img' />
            </div>
            <div className='checklist__col'>
            <p className='listItemText' style = {{textAlign:textWrapperAlign}}>
                {text}
            </p>
            </div>
        </div>
      </>
    );
  }
  
  export default CheckListItem;
  