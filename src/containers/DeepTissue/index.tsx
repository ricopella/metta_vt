import React, { ReactElement } from 'react';
import Image from '../../components/Image';
import Layout from '../../components/Layout';
import styled from '../../styled';

const PageHeading = styled.h2``

const PageSubHeading = styled.h4``

const P = styled.p``

interface Props {}

const PAGE_HEADING = `Deep Tissue Massage`

export default function DeepTissue({}: Props): ReactElement {
  return (
    <Layout title={PAGE_HEADING}>
      <PageHeading>{PAGE_HEADING}</PageHeading>
      <Image filename="placeholder1.png" />
      <PageSubHeading>Moving through the layers</PageSubHeading>
      <P>
        Targeting the deeper layers of muscle and connective tissue, deep tissue
        massage uses a variety of techniques to release muscular and myofacial
        restrictions within the body. Working through the layers of the body,
        deep tissue aims to relax, lengthen and release holding patterns. Deep
        tissue massage is often used for chronically tight or painful muscles
        and injury recovery and prevention.
      </P>
      <P>
        In the beginning, lighter pressure is applied to warm up and prep the
        muscles. Specific deeper massage techniques are then applied. Often deep
        tissue massage is assumed to be a "strong or hard" massage and often
        though as a "no pain no gain" therapy. Though stronger pressure is
        applied as the therapist moves through deeper layers of the body. The
        deeper techniques are used in the areas in need while the rest of the
        body is massaged with the intention to rebalance and relax.
      </P>
      <P>
        During the session it is common for the pressure to feel intense and
        uncomfortable. However, the session is not designed to be painful. If
        the pressure and sensation is beyond your comfort level always
        communicate with your therapist.{' '}
      </P>
      <P>Deep tissue is used to</P>
      <ul>
        <li>Relieve muscular pain</li>
        <li>Break up scar tissue</li>
        <li>Release restrictions in connection tissue</li>
        <li>Improve range of motion and physical performance</li>
      </ul>
    </Layout>
  )
}
