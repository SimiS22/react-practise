import React from 'react'
import './Header.css'

const Header = () => {
    const firstName = 'Simi'
    const lastName = 'Swaminathan'
    return (
        <header className="myHeader">
            <h3>This is {`${firstName} ${lastName}`}! </h3>
        </header>
    )
}
export default Header