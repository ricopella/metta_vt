import React, { ReactElement } from 'react';
import Layout from '../../components/Layout';
import styled from '../../styled';
import CONFIG from './config';

const ServicesContainer = styled.div``

const SectionHeading = styled.h3``

interface Props {}

const PAGE_HEADING = `Massage Services`

export default function Services({}: Props): ReactElement {
  return (
    <Layout title={PAGE_HEADING}>
      <ServicesContainer>
        {CONFIG.SERVICES_CATEGORY_ITEMS.map((category) => (
          <>
            <SectionHeading>{category.name}</SectionHeading>
            {category.items.map((item) => (
              <div>
                <div>{item.name}</div>
                <div>{item.description}</div>
                <div>
                  {item.variants.map((variant) => (
                    <div>
                      <div>{variant.name}</div>
                      <div>{variant.price}</div>
                    </div>
                  ))}
                </div>
                <div>{item?.subDescription || ''}</div>
              </div>
            ))}
          </>
        ))}
      </ServicesContainer>
    </Layout>
  )
}
