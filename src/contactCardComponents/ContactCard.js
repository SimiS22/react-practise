import React from 'react'

const ContactCard = (props) => { //
    return (
        // <div>
        //     <img src={props.imgUrl} />
        //     <h3>{props.name}</h3>
        //     <p>email : {props.email}</p>
        //     <p>phone : {props.phone}</p>
        // </div>
        <div>
            <img src={props.contact.imgUrl} alt='' />
            <h3>{props.contact.name}</h3>
            <p>email : {props.contact.email}</p>
            <p>phone : {props.contact.phone}</p>
        </div>
    )
}

export default ContactCard
