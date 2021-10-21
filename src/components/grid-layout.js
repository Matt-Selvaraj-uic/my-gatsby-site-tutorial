import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import GridCard from '../components/grid-card'
import {
    row,
    block,
    cardtext,
    image
} from './gridlayout.module.css'

const GridLayout = () => {
    return (
        <div className = {row}>
            <div className = {block}>
                <GridCard link = "https://www.youtube.com/watch?v=oMXGGmBfkf8&ab_channel=AlilaMedicalMedia" title = 'Pfizer'>
                    <StaticImage className = {image}
                        alt = "image error"
                        src = '../images/pfizer.jpeg'
                    />
                    <p1 className = {cardtext}>This is the Pfizer Vaccine.<br/>This is a fact about the pfizer vaccine</p1>
                </GridCard>
            </div>
            <div className = {block}>
                <GridCard link = "https://www.youtube.com/watch?v=oMXGGmBfkf8&ab_channel=AlilaMedicalMedia" title = 'Moderna'>
                    <StaticImage className = {image}
                        alt = "image error"
                        src = '../images/moderna.jpeg'
                    />
                    <p1 className = {cardtext}>This is the Moderna Vaccine.<br/>This is a fact about the Moderna vaccine</p1>
                </GridCard>
            </div>
            <div className = {block}>
                <GridCard link = "https://www.youtube.com/watch?v=oMXGGmBfkf8&ab_channel=AlilaMedicalMedia" title = 'Johnson & Johnson'>
                    <StaticImage className = {image}
                        alt = "image error"
                        src = "../images/jj.jpeg"
                    />
                    <p1 className = {cardtext}>This is the Johnson & Johnson Vaccine.<br/>This is a fact about the Johnson & Johnson vaccine</p1>
                </GridCard>
            </div>
        </div>
    )
}

export default GridLayout