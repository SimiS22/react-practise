import React from 'react'
import './Clock.css'

class Clock extends React.Component {
    constructor() {
        super();
        this.state = { date: new Date() }
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000);
    }
    render() {
        const time = this.state.date.toLocaleTimeString()
        return (
            <div className='time'>
                Time : {time}
            </div>
        )
    }
}
export default Clock