import React, { FC } from 'react'
import styled from '../../styled'

interface IOutboundLink {
  color?: string
  href: string
  value: string
  title?: string
}

const LinkWrapper = styled.a<{ color?: string }>`
  color: ${props => (props.color ? props.color : props.theme.actionColor)};
`

const OutboundLink: FC<IOutboundLink> = ({ color, href, title, value }) => (
  <LinkWrapper
    color={color}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    title={title}
  >
    {value}
  </LinkWrapper>
)

export default OutboundLink
