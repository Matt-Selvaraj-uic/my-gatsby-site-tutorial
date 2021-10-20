import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import GridCard from '../components/grid-card'
import {
    row,
    block
} from './gridlayout.module.css'

const GridLayout = () => {
    return (
        <div className = {row}>
            <div className = {block}>
                <GridCard link = "https://www.youtube.com/watch?v=oMXGGmBfkf8&ab_channel=AlilaMedicalMedia" title = 'Pfizer Vaccine'>
                    <StaticImage
                        alt = "image error"
                        src = '../images/pfizer.jpeg'
                    />
                    <p1>This is the Pfizer Vaccine. This is a fact about the pfizer vaccine</p1>
                </GridCard>
            </div>
            <div className = {block}>
                <GridCard link = "https://www.youtube.com/watch?v=oMXGGmBfkf8&ab_channel=AlilaMedicalMedia" title = 'Moderna Vaccine'>
                    <StaticImage
                        alt = "image error"
                        src = '../images/moderna.jpeg'
                    />
                    <p1>This is the Moderna Vaccine. This is a fact about the Moderna vaccine</p1>
                </GridCard>
            </div>
            <div className = {block}>
                <GridCard link = "https://www.youtube.com/watch?v=oMXGGmBfkf8&ab_channel=AlilaMedicalMedia" title = 'Johnson & Johnson Vaccine'>
                    <StaticImage
                        alt = "image error"
                        src = "../images/jj.jpeg"
                    />
                    <p1>This is the Johnson & Johnson Vaccine. This is a fact about the Johnson & Johnson vaccine</p1>
                </GridCard>
            </div>
        </div>
    )
}

export default GridLayout