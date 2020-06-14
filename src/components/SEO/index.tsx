import React, { FC } from 'react'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

export interface SEOProps {
  description?: string
  image?: string
  title?: string
}

const SEO: FC<SEOProps> = ({ description, image, title }) => {
  const { pathname } = useLocation()
  const {
    pageTitle: defaultTitle,
    description: defaultDescription,
    lang,
    keywords,
    siteUrl,
  } = useSiteMetaData()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={`${title} | ${defaultTitle}`}
    >
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={(keywords || []).join(`, `)} />
    </Helmet>
  )
}

export default SEO
