import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonicalUrl }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    {/* Add other meta tags like Open Graph, Twitter cards, etc. */}
  </Helmet>
);

export default SEO;
