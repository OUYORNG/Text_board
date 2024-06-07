import { useState } from 'react'
import React from 'react'
import './index.css'
import Customization from './Components/Customization.jsx'
import Nav from './Components/Nav.jsx'
import Display from './Components/Display.jsx'
import FontSetting from './Components/FontSetting.jsx'
import { SharedText } from './Components/SharedText.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { Home, AboutUs, ErrorPage, Documents } from "./pages/index";
import Special from './Special.jsx'




function App() {
  let Default = "Welcome to GIC2B TextBoard"
  const [text,setText] = useState(Default)
  const [Init,setInit] = useState(Default)
  const [direction,setDirection] = useState(9)
  const [Speed,setSpeed] = useState(1)
  const [Blink,setBlink] = useState(false)
  const [BlinkSpeed,setBlinkSpeed] = useState(1)
  const [Size,setSize] = useState(35)
  const [Color,setColor] = useState("")
  const [Bg,setBg] = useState("#F0F0F0")
  const [fullscreen,setFullScreen] = useState(false)
  const [font,setFont] = useState("")
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/Documents",
          element: <Documents />,
        },
        {
          path: "/AboutUs",
          element: <AboutUs />,
        },
        {
          path: "/Special",
          element: <Special />,
        },
      ],
    },
  ]);

  return (
    <SharedText.Provider value={{
      text,setText,
      Init,setInit,
      direction,setDirection,
      Speed,setSpeed,
      Blink,setBlink,
      BlinkSpeed,setBlinkSpeed,
      Size,setSize,
      Color,setColor,
      Bg,setBg,
      fullscreen,setFullScreen,
      font,setFont
      }}>

      <div>
      <a href={<Special/>}>Hel </a>
      <RouterProvider router={router} />
    </div>
    </SharedText.Provider>
  )
}

export default App
