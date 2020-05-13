import React from 'react'
import './Father.module.scss'

export default function Father(props) {
    return (
        <div className='father'>
            C.Swaminathan
            <div>{props.children}</div> {/* the components coming under father component are the children */}
        </div>
    )
}
