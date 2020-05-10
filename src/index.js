import React from 'react'
import ReactDOM from 'react-dom' // react and react-dom are 3rd party modules with dependencies which are installed to this project

// import App from './App'  // path has to be given bcoz if they didn't get the path, they will look for the module with the same name provided
import AppFav from './AppFav'
ReactDOM.render(<AppFav />, document.getElementById("root"))
