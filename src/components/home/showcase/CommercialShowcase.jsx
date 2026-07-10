import React from 'react';
import './styles.css';
import corp1 from './../../../assets/corporate1.webp';
import corp2 from './../../../assets/corporate2.webp';

const CommercialShowcase = ({ isMobile }) => {

  const message1 = [
    'We offer both residential and commercial applications designed to enhance your space with style, functionality, and durability.',
    <br key={1} />,
    <br key={2} />,
    'Whether you\'re outfitting a small or large-scale business, our tailored window treatments ensure beautiful aesthetics while providing energy efficiency and light control.'
  ];
  const message2 = [
    'We prioritize quality service and long-lasting performance, making us the go-to choice for businesses looking to elevate their environment.',
    <br key={1} />,
    <br key={2} />,
    'If you\'re ready to transform your commercial space, contact us today for your free consultation visit!'
  ]

  return (
    <div id='commercial_showcase_container'>
      <h2 id='commercial_showcase_banner' className='banner'>
        COMMERCIAL SOLUTIONS
      </h2>
      <div className='commercial_showcase_info_container'>
        <div className='commercial_showcase_section'>
          {
            isMobile ?
              <>
                <img src={corp1} alt='corporate_office1' className='commercial_showcase_image' />
                <div className='commercial_showcase_info'>
                  {message1}
                </div>
              </>
              :
              <>
                <div className='commercial_showcase_info'>
                  {message1}
                </div>
                <img src={corp1} alt='corporate_office1' className='commercial_showcase_image' />
              </>
          }
        </div>
        <div className='commercial_showcase_section'>
          {
            isMobile ?
              <>
                <div className='commercial_showcase_info'>
                  {message2}
                </div>
                <img src={corp2} alt='corporate_office2' className='commercial_showcase_image' />
              </>
              :
              <>
                <img src={corp2} alt='corporate_office2' className='commercial_showcase_image' />
                <div className='commercial_showcase_info'>
                  {message2}
                </div>
              </>
          }
        </div>
      </div>
      <div id='consultation_anchor'></div>
    </div>
  );
};

export default CommercialShowcase;