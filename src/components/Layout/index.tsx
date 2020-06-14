import createPersistedState from 'use-persisted-state'
import Footer from '../Footer'
import NORMALIZE from '../../styles/normalize'
import React, { FC } from 'react'
import SEO from '../SEO'
import styled from '../../styled'
import ThemeContext from '../../providers/ThemeContext'
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../../styles/variables'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

interface ILayout {
  title?: string
}

const Main = styled.main``
const PageWrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`

const useThemeState = createPersistedState("theme")
const Layout: FC<ILayout> = ({ children, title }) => {
  const [isThemeDark, setIsThemeDark] = useThemeState(false)

  return (
    <>
      <Global styles={NORMALIZE} />
      <SEO title={title} />
      <ThemeContext.Provider value={{ isThemeDark, setIsThemeDark }}>
        <ThemeProvider theme={isThemeDark ? DARK_MODE_THEME : LIGHT_MODE_THEME}>
          <PageWrapper>
            <Main>{children}</Main>
            <Footer />
          </PageWrapper>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default Layout
