import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App content={'Hello'} content2={"Hello"} />
    {/* <App content={'World'}  /> */}
  </React.StrictMode>,
)
