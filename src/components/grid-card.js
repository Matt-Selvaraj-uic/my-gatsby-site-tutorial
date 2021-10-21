import * as React from 'react'
import {cardheader} from './gridlayout.module.css'

const GridCard = ({ link, title, children}) => {
    return (
        <a style={{ textDecoration: 'none', color: 'black'}} href = {link} target = '_blank' rel="noreferrer"><div>
            <h1 className = {cardheader}>{title}</h1>
            {children}
        </div></a>
    )
}

export default GridCard