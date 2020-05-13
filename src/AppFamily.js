import React from 'react'
import Father from './familyComponents/Father'
import Mother from './familyComponents/Mother'
import Daughter from './familyComponents/Daughter'
import Son from './familyComponents/Son'
import SonInLaw from './familyComponents/SonInLaw'

export default function AppFamily() {
    return (
        <div>
            <Father>
                <Mother address={'Nivedyam, Vakkode, Kakkayur,Palakkad'}>
                    <Daughter />        {/* self-closing tags are given if we dont need to add any components inside the Daughter component*/}
                    <Son />
                    <SonInLaw />
                </Mother>
            </Father>
        </div>
    )
}
