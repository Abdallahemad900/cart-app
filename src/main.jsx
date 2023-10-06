import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"

import { store, persistor } from './reduxtoolkit/Store.jsx';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import {Canvas} from '@react-three/fiber'
import TDcomp from './components/3ds/Tdcomp.jsx'

// browserrouter bst3mlo 34an atnkl ben alsf7at bshola

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> {/* Add PersistGate */}
          <App />
    
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);