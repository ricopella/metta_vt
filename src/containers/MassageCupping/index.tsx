import React from 'react';
import Image from '../../components/Image';
import Layout from '../../components/Layout';
import styled from '../../styled';

const PageContainer = styled.section``

const PageHeading = styled.h2``

const SubHeading = styled.h3``

const Bold = styled.b``

const P = styled.p``

const PAGE_HEADING = `Massage Cupping`

const MassageCupping = () => (
  <Layout title={PAGE_HEADING}>
    <PageContainer>
      <PageHeading>{PAGE_HEADING}</PageHeading>
      <Image filename={'placeholder1.png'} />
      <SubHeading>It all started when...</SubHeading>
      <Bold>
        Don’t fear the cups! Yes, it looks different and the cups and leave
        marks but it’s all GOOD!
      </Bold>
      <Bold>What is Massage Cupping?</Bold>
      <P>
        Massage cupping is a form of vacuum therapy, using different forms of
        cups (silicone, hard plastic and glass) all with manual pumps to create
        a suction. This suction lifts the underlying tissue. Treatments can be
        customized to for a variety of therapies from lymphatic drainage to deep
        tissue release.
      </P>
      <Bold>What are the benefits?</Bold>
      <ul>
        <li>
          Releasing muscular, fascial and connective tissue adhesions and
          trigger points
        </li>
        <li>Lighter application for lymphatic drainage</li>
        <li>Relieves fascial tension for plantar fasciitis</li>
        <li>Shown to relieve pressure from nerve impingements</li>
        <li>
          Reduces scarring - can assist in healing surgical scars (new and old)
        </li>
        <li>Relieving respiration congestion and inflammation</li>
        <li>
          Elevating abdominal discomfort - from constipation to ovarian cyst
          pain (post rupture)
        </li>
        <li>
          There are many many more benefits. Come check it out and see for
          yourself!
        </li>
      </ul>

      <Bold>Other things to know:</Bold>
      <ul>
        <li>
          Cups often leave marks. This is OK. The cups can pull old, stagnant
          blood and cellular waste out of cells, up to 4 inches deep. Marks can
          stay as long as 1 week depending how your body processes, past trauma
          to the body, how old the injury etc.
        </li>
        <li>
          Due to the highly increased circulation it is VERY important to stay
          hydrated and after the treatment to avoid heat
        </li>
      </ul>
    </PageContainer>
  </Layout>
)

export default MassageCupping
