import OutboundLink from '../OutboundLink'
import React, { FC } from 'react'
import styled from '../../styled'

const HeaderElement = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  width: 100%;
`

const HeaderTop = styled.div`
  background-color: ${props => props.theme.secondaryBackground};
  color: ${props => props.theme.secondaryColor};
  display: grid;
  gap: 0.25rem 0;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content);
  height: auto;
  justify-items: center;
  label: header-top;
  padding: 1rem 0;
`

const HeaderTopItem = styled.div``

const Button = styled.button`
  background-color: ${props => props.theme.white};
  border-radius: 0.1875rem;
  font-size: 1rem;
  padding: 0.5rem 2rem;
`

const HeaderBottom = styled.div`
  label: header-bottom;
`

const Header: FC<{}> = () => {
  return (
    <HeaderElement>
      <HeaderTop>
        <HeaderTopItem>
          <b>Email: </b>
          <OutboundLink
            color={"white"}
            href={"mailto:jintina@mettavt.com"}
            title="jintina@mettavt.com"
            value={"jintina@mettavt.com"}
          />
        </HeaderTopItem>
        <HeaderTopItem>
          <b>Phone: </b>
          <OutboundLink
            color={"white"}
            href={"tel:+18021002000"}
            title="8021002000"
            value={`1-802-100-2000`}
          />
        </HeaderTopItem>
        <Button>
          <OutboundLink
            href={
              "https://www.massagebook.com/Burlington~Massage~MettaHealingArtsandWellness?src=external#services"
            }
            title="Book an Appointment"
            value="Book an Appointment"
          />
        </Button>
      </HeaderTop>
      <HeaderBottom />
    </HeaderElement>
  )
}

export default Header
