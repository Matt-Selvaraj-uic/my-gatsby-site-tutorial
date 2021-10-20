import * as React from 'react'
import {
    row,
    block,
    image,
    demographics,
    reasons
} from './persona1.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Persona1 = () => {
    return (
        <div className = {row}>
        <div className = {block}>
            <div className = {image}>
            <StaticImage
                        alt = "image error"
                        src = '../images/matias.png'
                    />
            </div>
            <div className = {demographics}>
                <h1>Matias Torres</h1>
                <h2>Age: 23</h2>
                <h2>Occupation: Warehouse Worker</h2>
                <h2>Place of Residence: Central Illinois</h2>
                <h2>Vaccination Status: Unvaccinated</h2>
            </div>
        </div>
        <div  className = {reasons}>
            <h1>Reasons for refusing the vaccine</h1>
            <div>
                <h2>Uknown Long-term Effects</h2>
                <div><p1>"I just think we are going too fast requiring it when the long-term effects can't be known"</p1></div>
            </div>
            <div>
                <h2>Need time to take off work to recover</h2>
                <div><p1>"I know the vaccine causes people to be sick for a bit, and I don't want to use a sick day to get vaccinated"</p1></div>
            </div>
            <div>
                <h2>Potential serious side effects</h2>
                <div><p1>"I remember reading something that vaccinations cause blod clots so I'm worried about that too"</p1></div>
            </div>
        </div>
        </div>
    )
}

export default Persona1