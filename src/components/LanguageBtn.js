import React, { useContext } from "react";
import { Select,Menu, Dropdown} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { HiTranslate } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import {  connect,useDispatch } from "react-redux";
import { LANGUAGE_TYPE } from "constants/Constants";
// import {Context} from "../Wrapper";
import {LanguageIcon} from "./LanguageIcon"

import "./LanguageBtn.scss";
function LanguageBtn(props) {
  // const context = useContext(Context);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="0" icon={<LanguageIcon country="israel" />}>
        <FormattedMessage id="language-btn__drop_one"></FormattedMessage>
      </Menu.Item>
      <Menu.Item key="1" icon={<LanguageIcon country="usa" />}>
        <FormattedMessage id="language-btn__drop_two"></FormattedMessage>
      </Menu.Item>
    </Menu>
  );
  
  
  function handleMenuClick({key}) {
    var langs = ["heb","en"]
    var langArr = Object.values(LANGUAGE_TYPE);
    dispatch({
        type: "SET_ORIENTATION",
        payload: langArr[key],
      });
    dispatch({
        type: "SET_LANGUAGE",
        payload: langs[key],
      });
    setAnchorEl(null);
  }
  return (
    <>
    <Dropdown overlay={menu} trigger={['click']}>
      <button className="navbar__language__btn">
        <div className="navbar_language__wrapper">
        <HiTranslate style={{marginRight:'0.3vw'}}/> 
            <FormattedMessage id="language-btn__curr_lang"></FormattedMessage>
         <AiFillCaretDown style={{marginLeft:'0.3vw'}}/>
        </div>
      </button>
    </Dropdown>

    </>
  );
}

export default (LanguageBtn);
