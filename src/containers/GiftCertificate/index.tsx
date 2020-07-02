import React from 'react'
import Layout from '../../components/Layout'
import styled from '../../styled'

const PageContainer = styled.section``

const PageHeading = styled.h2``

const SubHeading = styled.h3``

const Bold = styled.b``

const P = styled.p``

const Button = styled.button``

const PAGE_HEADING = `Gift Certificates`

const GiftCertificate = () => (
  <Layout title={PAGE_HEADING}>
    <PageContainer>
      <PageHeading>{PAGE_HEADING}</PageHeading>
      <SubHeading>Give the Gift of Metta</SubHeading>
      <P>Always the perfect gift!</P>
      <P>
        Purchase a e-Gift Certificate and print from home or choose to have a
        Gift Certificate sent to your or your recipient's home.{' '}
      </P>
      <P>Quick, easy and convenient.</P>
      <Button>Buy Gift Certificates</Button>
    </PageContainer>
  </Layout>
)

export default GiftCertificate
