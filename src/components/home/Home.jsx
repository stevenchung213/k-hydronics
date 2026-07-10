import React, { lazy, Suspense } from 'react';
import SEO from './../shared/SEO/SEO';
import Loading from './../shared/Loading/Loading';
import Install from './install/Install';
import './styles.css';

const Benefits = lazy(() => import('./benefits/Benefits'));
const ProductBenefits = lazy(() => import('./product_benefits/ProductBenefits'));
const Consultation = lazy(() => import('./consultation/Consultation'));
const Showcase = lazy(() => import('./showcase/Showcase'));
const CommercialShowcase = lazy(() => import('./showcase/CommercialShowcase'));

const companyName = 'K-hydronics';
const companyDomain = 'k-hydronics';

const Home = ({ isMobile }) => {

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
        {
          isMobile ? (
            <>
              <h3 className='subheader'>
                <div>
                  <a>Ancient Tradition</a>&nbsp;<p>Meets&nbsp;</p>Modern Technology
                </div>
              </h3>
            </>
          )
            :
            (
              <>
                <h3 className='subheader'>
                  <div>
                    <a>Ancient Tradition</a>&nbsp;<p>Meets&nbsp;</p>Modern Technology
                  </div>
                </h3>
              </>
            )
        }
        <Suspense fallback={<Loading />}>
          <Benefits isMobile={isMobile} />
          <Showcase isMobile={isMobile} />
          <ProductBenefits isMobile={isMobile} />
          <Install isMobile={isMobile} />
          <CommercialShowcase isMobile={isMobile} />
          <Consultation isMobile={isMobile} />
        </Suspense>
      </main>
    </>
  );
};

export default Home;

