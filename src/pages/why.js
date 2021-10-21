import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const WhyPage = () => {
  return (
    <Layout pageTitle="Why others are vaccine hesitant">
      <ul>
          <li><Link to="/matias">Matias</Link></li>
      </ul>
    </Layout>
  )
}

export default WhyPage