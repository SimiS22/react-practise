import React from 'react'

export default function Mother(props) {
    return (
        <div className='mother'>
            Jalaja Swaminathan
            <div className='address'>{props.address}</div><br />
            <div>{props.children}</div>
        </div>
    )
}
