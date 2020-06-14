export interface DimensionsType {
  fontSize: {
    regular: number
    large: number
  }
  headingSizes: {
    [h: string]: number
  }
  lineHeight: {
    [lH: string]: number
  }
  containerPadding: string | number
  resume: {
    heading: {
      height: string
    }
  }
}

export interface SiteMetaData {
  author: string
  description: string
  keywords: string[]
  lang: string
  pageTitle: string
  siteUrl: string
  title: string
}
