import { graphql, useStaticQuery } from 'gatsby'
import { SiteMetaData } from '../types'

const useSiteMetaData = (): SiteMetaData => {
  const { data } = useStaticQuery(graphql`
    query {
      data: site {
        siteMetadata {
          author
          description
          lang
          keywords
          siteUrl
          title
          pageTitle
        }
      }
    }
  `)

  return data?.siteMetadata || null
}

export default useSiteMetaData
