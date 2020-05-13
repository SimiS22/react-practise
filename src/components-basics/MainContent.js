import React from 'react' // should be used in every file where we use JSX
import './Main-content.scss'

function MainContent() {  // Components must be of capital letter
    return (
        <div className="mainContent">
            <p>Hi All! I am Simi Swaminathan.</p>
            <ul>
                <li>Age : 27</li>
                <li>Hometown : Palakkad, Kerala, India</li>
                <li>Current Address : Hamburg, Germany</li>
            </ul>
        </div>
    )
}
export default MainContent  //to make in available in other places in the application