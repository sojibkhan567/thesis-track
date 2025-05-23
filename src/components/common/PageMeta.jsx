import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'


const PageMeta = ({ title, description }) => {
  return (
    <>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </>
  )
}

export const AppWrapper = ({ children }) => (
  <HelmetProvider>{children}</HelmetProvider>
);






export default PageMeta