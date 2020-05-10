import React from 'react'

const Favorites = (props) => {
    return (
        <div>
            <h4 style={{ display: props.question ? 'block' : 'none' }}>Question : {props.question}</h4>{/*condition added to do display answer even if there is no question */}
            {/* <h4 style={{ display: !props.question && 'none' }}>{props.question}</h4> */}{/* setting 'block as default */}
            <h4 style={{ color: !props.question && 'green' }}>Answer : {props.answer}</h4> <br />
        </div>
    )
}
export default Favorites