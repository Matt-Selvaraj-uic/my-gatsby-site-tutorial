// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
// import { StaticImage } from 'gatsby-plugin-image'
import GridLayout from '../components/grid-layout'
import {link, linktext} from '../components/layout.module.css'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div>
        <p>Welcome to my page on vaccine hesitancy!</p>
        <p>Click on the vaccine options below to learn more about each Vaccine.</p>
      </div>
      <GridLayout></GridLayout>
      <div className = {link}><a href = 'https://www.osfhealthcare.org/' className = {linktext} target="_blank" rel="noreferrer">OSF Healthcare</a></div>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage