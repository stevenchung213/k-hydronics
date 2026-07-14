import React from 'react';
import { Link } from 'react-router';
import facebook from './../../assets/facebook.webp';
import instagram from './../../assets/instagram.webp';
import tiktok from './../../assets/tiktok.webp';
import './styles.css';

const Footer = ({ isMobile }) => {

  const footerItems = [
    {
      section: 'Customer Support',
      links: [
        { text: isMobile ? 'FAQs' : 'Frequently Asked Questions', link: 'faqs' },
        // { text: isMobile ? 'Commercial' : 'Commercial Inquiries', link: 'commercial' }
      ]
    },
    {
      section: 'About Us',
      links: [
        { text: 'Who We Are', link: '/about' }
      ]
    },
    {
      section: 'Social Media',
      links: [
        { text: 'Facebook', src: facebook },
        { text: 'Instagram', src: instagram },
        { text: 'Tiktok', src: tiktok }
      ]
    },
    {
      section: 'Contact Us',
      links: [
        { text: 'Email', link: 'email', value: 'khydronics@gmail.com' },
        { text: 'Phone', link: 'phone', value: '213-649-6071' }
      ]
    },
    {
      section: 'Legal Information',
      links: [
        { text: isMobile ? 'Privacy' : 'Privacy Policy', link: 'privacy_policy' },
        { text: 'Terms of Use', link: 'terms_of_use' }
      ]
    }
  ];

  return (
    <footer id='footer_container'>
      {
        footerItems.map((item, index) => {
          return (
            <div key={index} className='footer_section_container'>
              <h3>{item.section}</h3>
              <ul>
                { // conditional rendering for Social Media footer items
                  item.section === 'Social Media' ? item.links.map((link, linkIndex) =>
                  (// render social media icons
                    // TODO
                    // add links to social media pages (new tab)
                    <li
                      key={linkIndex}
                      className='footer_section_link unclickable social_media_link'
                    >
                      {
                        link.text
                      }
                      <img
                        src={link.src}
                        alt={`${link.text}_icon`}
                        className='social_media_icon'
                      />
                      <div className='social_media_link_tooltip'>
                        Coming soon..
                      </div>
                    </li>
                  )) // contact us section link handling
                    : item.section === 'Contact Us' ? item.links.map((link, linkIndex) =>
                    (
                      <div
                        key={linkIndex}
                        className={`footer_section_link ${link.text.toLowerCase()}_link`}
                      >
                        <Link
                          className={`${link.text.toLowerCase()}_link`}
                          to='contact'
                        >
                          {
                            link.text
                          }
                        </Link>
                        <div className={`${link.text.toLowerCase()}_link_tooltip`}>
                          {
                            link.value
                          }
                        </div>
                      </div>
                    ))
                      : // render all other standard footer items
                      item.links.map((link, linkIndex) =>
                      (
                        <Link
                          to={link.link}
                          key={linkIndex}
                          className='footer_section_link'
                        >
                          {
                            link.text
                          }
                        </Link>
                      ))
                }
              </ul>
            </div>
          );
        })
      }
    </footer>
  );
};

export default Footer;
