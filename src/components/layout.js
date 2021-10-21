import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    nav,
    main
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className = {container}>
      <title>{pageTitle}</title>
      <nav className = {nav}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}>
            <Link to="/why" className={navLinkText}>Why</Link></li>
          <li className={navLinkItem}>
            <Link to="/aimodel" className={navLinkText}>AI Model</Link></li>
            <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <main className = {main}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout