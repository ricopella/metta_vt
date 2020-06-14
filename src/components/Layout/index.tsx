import Footer from '../Footer'
import NORMALIZE from '../../styles/normalize'
import React, { FC } from 'react'
import SEO from '../SEO'
import styled from '../../styled'
import { Global } from '@emotion/core'

interface ILayout {
  title?: string
}

const Main = styled.main``
const PageWrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`

const Layout: FC<ILayout> = ({ children, title }) => {
  return (
    <>
      <Global styles={NORMALIZE} />
      <SEO title={title} />
      <PageWrapper>
        <Main>{children}</Main>
        <Footer />
      </PageWrapper>
    </>
  )
}

export default Layout
