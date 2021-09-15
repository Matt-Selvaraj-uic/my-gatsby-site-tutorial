import * as React from 'react'
import { Link } from 'gatsby'

const GridCard = ({ link, title, children}) => {
    return (
        <Link style={{ textDecoration: 'none', color: 'black'}} to = {link}><div>
            <h1>{title}</h1>
            {children}
        </div></Link>
    )
}

export default GridCard