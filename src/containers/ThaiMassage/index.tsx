import React, { ReactElement } from 'react';
import Image from '../../components/Image';
import Layout from '../../components/Layout';
import styled from '../../styled';

const PageHeading = styled.h2``

const PageSubHeading = styled.h4``

const P = styled.p``

interface Props {}

const PAGE_HEADING = `Thai Massage`

export default function ThaiMassage({}: Props): ReactElement {
  return (
    <Layout title={PAGE_HEADING}>
      <PageHeading>{PAGE_HEADING}</PageHeading>
      <Image filename="placeholder1.png" />
      <PageSubHeading>The Ancient Practice of Thai Massage</PageSubHeading>
      <P>
        Thai massage, or Thai Yoga massage, is a traditional healing modality
        that has been taught and practiced in Thailand for over 2,500 years. The
        origins of Thai massage date back to the physician to the Buddha, Dr.
        Jivaka Kumarabhacca. The philosophy and practice of Thai massage hold
        their roots in traditional Ayurvedic medicine and traditional Chinese
        medicine, yoga, and Buddhism.
      </P>
      <P>
        A complete traditional Thai massage incorporates a combination of
        rocking compression, reflexology, acupressure, energy work and yoga-like
        stretching. The therapist uses their palms, thumbs, feet, elbows,
        forearms, and knees to preform this unique massage. The receiver is
        moved through a variety of positions - supine (lying face up), prone
        (lying face down), side lying, and seated. Thai massage is practiced on
        a firm mat on the floor and clients are fully clothed throughout the
        massage.
      </P>
      <P>
        Thai massage is a perfect compliment to any exercise or sports training
        routine for optimal performance. Thai massage is also an effective form
        of physical therapy by increasing range of motion. Massage sessions can
        be tailored to your specific needs. Clients of all ages can benefit from
        Thai massage.
      </P>
      <P>Health benefits of Thai massage:</P>
      <ul>
        <li>Improves circulation</li>
        <li>Increases flexibility/range of motion</li>
        <li>Reduces muscle tension and soreness</li>
        <li>Promotes pain relief</li>
        <li>Encourages healthy lymphatic function</li>
        <li>Balance energy (promoting healing)</li>
        <li>Releases mental, emotional, and physical stress</li>
        <li>Boosts immune system</li>
      </ul>
      <P>
        *It is important that clients bring loose and comfortable clothing to
        the massage session.
      </P>
    </Layout>
  )
}
