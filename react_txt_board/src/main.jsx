import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Customization from './Components/Customization.jsx'
import Nav from './Components/Nav.jsx'
import Display from './Components/Display.jsx'
import FontSetting from './Components/FontSetting.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Nav/>
    <Display/>
    <div className="flex-col md:flex md:flex-row gap-2 flex ">
      <div className="flex-grow">
        <Customization />
      </div>
      <div className='flex-grow'>
        <FontSetting />
      </div>
    </div>
  </div>
)
