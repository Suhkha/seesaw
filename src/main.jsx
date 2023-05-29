import React from 'react'
import ReactDOM from 'react-dom/client'
//import {HooksApp} from './HooksApp.jsx'
//import { CounterApp } from './01-useState/CounterApp'
import './index.css'
import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <SimpleForm />
  // </React.StrictMode>,
)
