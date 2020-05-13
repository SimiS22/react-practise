import React from 'react'
// import ToDoItem from './components/ToDoItem'
import Header from './components-basics/Header'
import Footer from './components-basics/Footer'
import MainContent from './components-basics/MainContent'
import TimeOfDay from './components-basics/TimeOfDay'
// import ToDoItem from './todoComponents/ToDoItem'
import ContactCard from './contactCardComponents/ContactCard'
import tom from './contactCardComponents/tom.jpg'
import jerry from './contactCardComponents/jerry.png'

const App = () => {
    console.log(tom)
    return (
        <div>
            <Header />
            {/* 
            <ToDoItem /> */}
            <TimeOfDay />
            <MainContent />
            {/* <ContactCard name="Tom" imgUrl={tom} email='tom@tomandjerry.com' phone='12345678' /> 
            <ContactCard name="Jerry" imgUrl={jerry} email='jerry@tomandjerry.com' phone='12345678' /> */}
            <ContactCard contact={
                {
                    name: "Tom",
                    imgUrl: tom,       // to be noted : inside an object image name is given without curly brackets
                    email: 'tom@tomandjerry.com',
                    phone: '12345678'
                }
            } />
            <ContactCard contact={
                {
                    name: "Jerry",
                    imgUrl: jerry,
                    email: 'jerry@tomandjerry.com',
                    phone: '12345678'
                }
            } />
            <Footer />
        </div>
    )
}
export default App
