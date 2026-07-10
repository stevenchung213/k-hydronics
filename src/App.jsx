import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import useScreenSize from './components/hooks/useScreenSize';

const Privacy = lazy(() => import('./components/privacy/Privacy'));
const Terms = lazy(() => import('./components/terms/Terms'));
const Faqs = lazy(() => import('./components/faq/Faq'));
const Contact = lazy(() => import('./components/contact/Contact'));
const NotFound = lazy(() => import('./components/notfound/NotFound'));

const App = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize.width < 769;

  return (
    <section id="app_container">
      <Navbar isMobile={isMobile} />
      <Routes>
        <Route index element={<Home isMobile={isMobile} />} />
        <Route path='privacy_policy' element={<Privacy isMobile={isMobile} />} />
        <Route path='terms_of_use' element={<Terms isMobile={isMobile} />} />
        <Route path='faqs' element={<Faqs isMobile={isMobile} />} />
        <Route path='contact' element={<Contact isMobile={isMobile} />} />
        <Route path='*' element={<NotFound isMobile={isMobile} />} />
      </Routes>
      <Footer isMobile={isMobile} />
    </section>
  );
};

export default App;
