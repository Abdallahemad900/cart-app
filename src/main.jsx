import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import {store} from "./reduxtoolkit/Store.jsx"

// browserrouter bst3mlo 34an atnkl ben alsf7at bshola







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
 
    </BrowserRouter>

  </React.StrictMode>,
)
