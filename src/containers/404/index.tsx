import Layout from '../../components/Layout'
import React from 'react'

const PAGE_TITLE = "404: Not found"

const NotFoundPage = () => (
  <Layout title={PAGE_TITLE}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
