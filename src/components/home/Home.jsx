import React, { lazy, Suspense } from 'react';
import SEO from './../shared/SEO/SEO';
import Loading from './../shared/Loading/Loading';
import Install from './install/Install';
import Paper from '@mui/material/Paper';
import './styles.css';

const Benefits = lazy(() => import('./benefits/Benefits'));
const ProductBenefits = lazy(() => import('./product_benefits/ProductBenefits'));
const Consultation = lazy(() => import('./consultation/Consultation'));
const Showcase = lazy(() => import('./showcase/Showcase'));

const companyName = 'K-hydronics';
const companyDomain = 'k-hydronics';

const Home = ({ isMobile }) => {

  const paperOptions = {
    width: isMobile ? '90%' : '70%',
    marginTop: '2.5rem',
    marginBottom: '2.5rem',
    borderRadius: '2rem',
  };

  return (
    <>
      <SEO
        title={`${companyName} | Floor Heating Experts`}
        description={`Well trusted floor heating provider in California for 10+ years. Contact us today!`}
        canonicalUrl={`https://www.${companyDomain}.com`}
      />
      <main id='home_container'>
        <div className='cover_photo' alt='cover_photo'>
          <h1 className='slogan'>
            {/* Ancient Tradition Meets New Age Technology */}
          </h1>
        </div>
        <>
          <h3 className='subheader'>
            <div>
              Ancient Tradition Meets Modern Technology
              {/* <a>Ancient Tradition</a>&nbsp;<p>Meets&nbsp;</p>Modern Technology */}
            </div>
          </h3>
        </>
        <Suspense fallback={<Loading />}>
          <Paper
            elevation={24}
            square={false}
            sx={paperOptions}
          >
            <Benefits isMobile={isMobile} />
          </Paper>
          <Paper
            elevation={24}
            square={false}
            sx={paperOptions}
          >
            <Showcase isMobile={isMobile} />
          </Paper>
          <Paper
            elevation={24}
            square={false}
            sx={paperOptions}
          >
            <ProductBenefits isMobile={isMobile} />
          </Paper>
          <Paper
            elevation={24}
            square={false}
            sx={paperOptions}
          >
            <Install isMobile={isMobile} />
          </Paper>
          <Paper
            elevation={24}
            square={false}
            sx={paperOptions}
          >
            <Consultation isMobile={isMobile} />
          </Paper>
        </Suspense>
      </main>
    </>
  );
};

export default Home;

