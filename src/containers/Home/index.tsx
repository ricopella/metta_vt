import Layout from '../../components/Layout'
import React from 'react'
import Image from '../../components/Image'
import styled from '../../styled'

const HomeContainer = styled.section`
  margin: 2rem 0;
`

const ContentWrapper = styled.div`
  margin: 4rem ${(props) => props.theme.spacing.s};
`

const P = styled.p``

const PAGE_TITLE = 'Meta Healing Arts & Wellness'

const Home = () => (
  <Layout title={PAGE_TITLE}>
    <HomeContainer>
      <Image filename="placeholder1.png" />
      <ContentWrapper>
        <P>
          Metta Healing Arts and Wellness offers professional massage and
          bodywork in Burlington, Vermont. Whether your goal is to relax and
          unwind, relieve muscular tension or improve flexibility or improve
          your overall health and wellness, we offer a variety of therapeutic
          massage and bodywork treatments that are tailored to your specific
          goals and needs.
        </P>
        <P>
          Located near the Lake Champlain waterfront and downtown Burlington,
          Vermont - Metta Healing Arts and Wellness provides a relaxing space
          for self-healing and renewal. Some of the massage therapy services we
          offer include
        </P>
        <ul>
          <li>Thai Massage</li>
          <li>Deep Tissue Massage</li>
          <li>Couples Massage</li>
          <li>Massage Cupping</li>
          <li>And more...</li>
        </ul>
        <P>
          <b>
            <em>metta: </em>The Pali word meaning loving-kindness. Devoid of
            self-interest metta seeks the well-being and happiness of others. It
            is true universal love.
          </b>
        </P>
      </ContentWrapper>
    </HomeContainer>
  </Layout>
)

export default Home
