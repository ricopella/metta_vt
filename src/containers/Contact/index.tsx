import React from 'react'
import Layout from '../../components/Layout'
import styled from '../../styled'

const PageContainer = styled.section``

const PageHeading = styled.h2``

const SubHeading = styled.h3``

const Bold = styled.b``

const P = styled.p``

const Break = styled.hr``

const Button = styled.button``

const PAGE_HEADING = `Contact`

const GiftCertificate = () => (
  <Layout title={PAGE_HEADING}>
    <PageContainer>
      <SubHeading>{PAGE_HEADING}</SubHeading>
      <P>41 Main Street, Suite 1 Burlington VT, 05401</P>
      <P>
        <Bold>T:</Bold> 802-243-6916
      </P>
      <P>
        <Bold>E:</Bold> jintina@mettavt.com
      </P>
      <Break />
      <SubHeading>Parking</SubHeading>
      <P>
        There is metered street parking on Main Street and a free parking lot
        behind the building that you can access from King Street. To get the
        parking lot - head west down King Street (towards the lake) and take a
        right directly after the Holloway Block sign, go to the other side of
        the parking lot. We are the building on the right. You'll see a sign for
        Metta Healing Arts and Wellness.
      </P>
      <Break />
      <SubHeading>Policy</SubHeading>
      <P>
        <Bold>Cancellation Policy: </Bold>Kindly allow 24 hours for
        cancellations or rescheduling.
      </P>
      <P>
        <Bold>No-Show Policy: </Bold>There is a 50% no-show fee for appointments
        missed without notice.
      </P>
    </PageContainer>
  </Layout>
)

export default GiftCertificate
