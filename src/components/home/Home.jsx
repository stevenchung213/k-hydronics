import React, { lazy, Suspense } from 'react';
import SEO from './../shared/SEO/SEO';
import Loading from './../shared/Loading/Loading';
import './styles.css';

const Benefits = lazy(() => import('./benefits/Benefits'));
const Showcase = lazy(() => import('./showcase/Showcase'));
const ProductBenefits = lazy(() => import('./product_benefits/ProductBenefits'));
const Commercial = lazy(() => import('./commercial/Commercial'));
const Install = lazy(() => import('./install/Install'));
const Consultation = lazy(() => import('./consultation/Consultation'));

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
          <h3 id='slogan' className='subheader'>
            <div>
              Ancient Korean Tradition Meets Modern Technology
            </div>
          </h3>
        </div>

        <Suspense fallback={<Loading />}>
          <Benefits isMobile={isMobile} />
          <Showcase isMobile={isMobile} />
          <ProductBenefits isMobile={isMobile} />
          <Commercial isMobile={isMobile} />

          {/* <Install isMobile={isMobile} /> */}

          <Consultation isMobile={isMobile} />
        </Suspense>
      </main>
    </>
  );
};

export default Home;

