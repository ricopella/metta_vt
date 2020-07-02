import React, { ReactElement } from 'react'
import Image from '../../components/Image'
import Layout from '../../components/Layout'
import styled from '../../styled'

const PageHeading = styled.h2``

const PageSubHeading = styled.h4``

const P = styled.p``

interface Props {}

const PAGE_HEADING = `About`

export default function About({}: Props): ReactElement {
  return (
    <Layout title={PAGE_HEADING}>
      <PageHeading>{PAGE_HEADING}</PageHeading>
      <PageSubHeading>
        <b>Jintina Sundarabhaya,</b> CMT, RYT
      </PageSubHeading>
      <Image filename="jin.jpg" />
      <P>
        Born and raised in Burlington, VT - Jintina has always been passionate
        about helping others. In her late teens she became fascinated in natural
        medicine, especially bodywork. She attended massage school in
        Burlington, VT then Thailand studying Thai massage and other forms of
        Eastern bodywork at Chiva-Som Academy and Thai Massage School
        Shivagakomarpaj (Old Medicine School). She is always continuing her
        education and trains in Thai Massage with Lotus Palm in Montréal,
        Canada. Jintina is Board (Nationally) Certified in Massage Therapy and
        Bodywork since 2005, a member of American Massage Therapy Association
        and as of 2016 a Certified Massage Cupping Practitioner with ACE Massage
        Cupping.
      </P>
      <P>
        In addition to massage, Jintina is a RYT-200 yoga instructor. She has
        completed multiple trainings through Yoga Vermont and Sukha Yoga. She
        incorporates her yoga training in her bodywork and her bodywork in your
        yoga classes. You can find her classes at Sukha Yoga.
      </P>
      <P>
        Jintina truly loves working as a bodyworker and sees it as an honor to
        work to improve the well-being and happiness of others.
      </P>
    </Layout>
  )
}
