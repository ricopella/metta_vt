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

interface ServiceItem {
  name: string
  description?: string
  subDescription?: string
  variants: {
    name: string
    price: number
  }[]
}

export interface ServiceCategory {
  name: string
  items: ServiceItem[]
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
