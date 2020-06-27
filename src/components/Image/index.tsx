import React, { FC, CSSProperties } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SerializedStyles } from '@emotion/core'
import Img, { FluidObject } from 'gatsby-image'

interface PureImageProps {
  alt?: string
  css?: SerializedStyles
  imageSizes?: FluidObject
  style?: CSSProperties
}

interface ImageProps extends PureImageProps {
  filename: string
}

export const PureGalleryImage: FC<PureImageProps> = ({
  imageSizes = undefined,
  css,
  alt,
  style = {},
}) => <Img css={css} alt={alt} sizes={imageSizes} style={style} />

/*
 * https://noahgilmore.com/blog/easy-gatsby-image-components/
 */
const Image: FC<ImageProps> = ({ filename, ...rest }) => {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              sizes(maxWidth: 700) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  `)
  const image = images.edges.find((n) => {
    return n?.node?.relativePath.includes(filename)
  })

  const imageSizes = image?.node?.childImageSharp?.sizes

  return <PureGalleryImage {...rest} imageSizes={imageSizes} />
}
export default Image
