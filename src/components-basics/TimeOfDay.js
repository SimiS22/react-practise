import React from 'react'

const TimeOfDay = () => {
    // const date = new Date(2020, 5, 7, 22)
    const date = new Date()
    const hours = date.getHours();
    let greeting = '';
    const greetingStyles = {          //in JSX,styles are added as objects(key-value pairs)
        color: 'rgba(24, 97, 146, 0.986)',
        fontFamily: 'Trebuchet MS',  //instead of '-', camel case is used
        fontSize: '40px'            // fontSize : 40 means 40px or else can be given as '40px'
    }
    if (hours >= 5 && hours < 12) {
        greeting = 'Good Morning!'
        greetingStyles.color = 'orange'
    }
    else if (hours >= 12 && hours < 16) {
        greeting = 'Good Afternoon!'
        greetingStyles.color = 'rgb(165, 156, 32)'
    }
    else if (hours >= 16 && hours < 20) {
        greeting = 'Good Evening!'
        greetingStyles.color = 'skyblue'
    }
    else {
        greeting = 'Good Night!'
        greetingStyles.color = 'darkblue'
    }
    return (
        //inline styling
        <h2 style={greetingStyles}>{greeting}</h2>
    )

}
export default TimeOfDay