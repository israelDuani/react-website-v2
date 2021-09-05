import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import LanguageBtn from "./LanguageBtn"
import { FaBars, FaTimes } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { IsMobileDevice } from "./CoreFunctions";

function Navbar() {
  const mimiLogoPath = "images/mimi_logo_text.webp";
  const mimiLogoAlt = "mimi logo kid reaching stars";
  const isMobile = IsMobileDevice()
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const routeArr = [{route:`/`,name:`navbar__home`},{route:`/QA`,name:`navbar__qa`},{route:`/tutorial`,name:`navbar__tutorial`},
                    {route:`/aboutus`,name:`navbar__about_us`},{route:`/contactus`,name:`navbar__contact_us`}]

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);

  const currentTab = useSelector((state) => state.currentTab);
  useEffect(() => {}, [currentTab]);

  return (
    <>
      <div className="navbar__background">
        <nav className="navbar">
          <div className="navbar__container">
            <div className="navbar__logo__wrapper">
              <img
                src={mimiLogoPath}
                alt={mimiLogoAlt}
                className="navbar__logo"
              />
            </div>
            <div className="menu__icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            
            <ul className={click ? "navbar__menu active" : "navbar__menu"}>
            {!isMobile ||(isMobile&&click) ? routeArr.map((routeInfo) => (
              
                <li className={currentTab == routeInfo.route ? "navbar__item navbar_current_tab" : "navbar__item"} key={routeInfo.name}>
                  <Link
                  to={routeInfo.route}
                  className="navbar__item__link"
                  onClick={closeMobileMenu}
                  style={{ color: 'inherit', textDecoration: 'inherit'}}
                  >
                    <b><FormattedMessage id={routeInfo.name}></FormattedMessage></b>
                  </Link>
                 </li>
            )):<></>}
            </ul>
            {isMobile == false ? 
            <>
              <Link to="/contactus" className="btn-link">
                <button className="navbar__console__btn">
                  <FormattedMessage id="navbar__console"></FormattedMessage>
                </button>
              </Link>
              <LanguageBtn/>
            </>
          :<></>}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

// {button ? (
//   <Link to='/sign-up' className='btn-link'>
//     <button className='btn filled__console__btn'>CONSOLE</button>
//   </Link>
// ) : (
//   <Link to='/sign-up' className='btn-link'>
//     <Button
//       buttonStyle='btn--outline'
//       buttonSize='btn--mobile'
//       onClick={closeMobileMenu}
//     >
//       SIGN UP
//     </Button>
//   </Link>
// )}
