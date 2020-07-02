import React, { ReactElement } from 'react'
import Image from '../../components/Image'
import Layout from '../../components/Layout'
import styled from '../../styled'

const PageHeading = styled.h2``

const PageSubHeading = styled.h4``

const P = styled.p``

interface Props {}

const PAGE_HEADING = `Roll Model Method Therapy`

export default function RollModelMethodTherapy({}: Props): ReactElement {
  return (
    <Layout title={PAGE_HEADING}>
      <PageHeading>{PAGE_HEADING}</PageHeading>
      <Image filename="placeholder1.png" />
      <PageSubHeading>
        Learn simple and effective self-care/ self-massage.
      </PageSubHeading>
      <P>
        This simple self-treatment method provides soft-tissue conditioning by
        using myofascial release with grippy, pliable myofascial massage balls.
        Ease pain, increase mobility and take your healing into your own hands.
      </P>
      <P>
        Sessions include breath work, basic anatomy instruction and mental
        awareness. You will learn how to use the balls in various ways to tumble
        through tight muscles
      </P>
      <P>
        Private sessions will vary from 30 minutes - 60 minutes. There will be a
        20-minute add-on option to the end of your massage for shorter sessions
        for specific areas of the body.
      </P>
      <P>Roll Model® Method balls are available at the studio for purchase.</P>
      <P>Small group rollout classes available by request.</P>
    </Layout>
  )
}
