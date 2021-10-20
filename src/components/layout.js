import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className = {container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link></li>
          <li className={navLinkItem}>
            <Link to="/matias" className={navLinkText}>Matias</Link></li>
          <li className={navLinkItem}>
            <Link to="/aimodel" className={navLinkText}>AI Model</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout