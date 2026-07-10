import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router';
import logo from './../../assets/logo.webp';
import hamburger from './../../assets/misc/hamburger.webp';
import useClickOutside from './../hooks/useClickOutside';
import './styles.css';

const NavBar = ({ isMobile }) => {
  const [showNav, setShowNav] = useState(false);
  const mobileNavRef = useRef();

  useClickOutside(mobileNavRef, () => {
    setShowNav(false);
  });

  return (
    <nav id='navbar_container' ref={mobileNavRef}>
      {
        !showNav &&
        <div className='navbar_logo_container'>
          <NavLink
            to='/'
          >
            <img className='logo' src={logo} alt='Logo' />
          </NavLink>
        </div>
      }
      {
        isMobile ?
          <>
            <img
              className={'mobile_nav_icon' + (showNav ? ' hide_nav_icon' : '')}
              src={hamburger}
              alt='mobile_nav_icon'
              onClick={() => setShowNav(state => !state)}
            />
            {
              showNav &&
              <>
                <div className='navbar_links_container'>
                  <nav className='navbar_link_container'>
                    <NavLink
                      to='/'
                      className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                      onClick={() => setShowNav(state => !state)}
                    >
                      Home
                    </NavLink>
                  </nav>
                  <nav className='navbar_link_container'>
                    <NavLink
                      to='catalog'
                      className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                      onClick={() => setShowNav(state => !state)}
                    >
                      Product
                    </NavLink>
                  </nav>
                  <nav className='navbar_link_container'>
                    <NavLink
                      to='distributors'
                      className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                      onClick={() => setShowNav(state => !state)}
                    >
                      Distributors
                    </NavLink>
                  </nav>
                  <nav className='navbar_link_container'>
                    <NavLink
                      to='about'
                      className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                      onClick={() => setShowNav(state => !state)}
                    >
                      About
                    </NavLink>
                  </nav>
                  <nav className='navbar_link_container'>
                    <NavLink
                      to='contact'
                      className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                      onClick={() => setShowNav(state => !state)}
                    >
                      Contact
                    </NavLink>
                  </nav>
                </div >
              </>
            }
          </>
          :
          <>
            <div className='navbar_links_container'>
              <nav className='navbar_link_container'>
                <NavLink
                  to='/'
                  className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                >
                  Home
                </NavLink>
              </nav>
              <nav
                className='navbar_link_container'
              >
                <NavLink
                  to='catalog'
                  className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Product
                </NavLink>
              </nav>
              <nav className='navbar_link_container'>
                <NavLink
                  to='distributors'
                  className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                >
                  Distributors
                </NavLink>
              </nav>
              <nav className='navbar_link_container'>
                <NavLink
                  to='about'
                  className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                >
                  About
                </NavLink>
              </nav>
            </div >

            <div className='navbar_contact_button_container'>
              <NavLink
                to='contact'
              >
                <button
                  className='navbar_contact_button'
                  aria-label='Contact Form Link Button'
                >
                  Contact
                </button>
              </NavLink>
            </div>
          </>
      }
    </nav >
  );
};

export default NavBar;
