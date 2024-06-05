import React, { useContext, useEffect } from 'react'
import CanvasGlitch from './Animation/CanvasGlitch'
import CanvasBounce from './Animation/CanvasBounce'
import CanvasExplosion from './Animation/CanvasExplosion'
import CanvasFadeInOut from './Animation/CanvasFadeInOut'
import CanvasFlip from './Animation/CanvasFlip'
import CanvasMorph from './Animation/CanvasMorph'
import CanvasShadowGlow from './Animation/CanvasShadowGlow'
import CanvasHandwriting from './Animation/CanvasHandwriting'


import GifLink from './Card/GIF/GifLink'
import { Shared } from './Shared'
import CanvasNeon from './Animation/CanvasNeon'
import CanvasBurn from './Animation/CanvasBurn'

function DisplayText() {
  const {ModeClicked,setModeClicked} = useContext(Shared)
  
    useEffect(() => {
      // Find the user in the users array
      const user = GifLink.find(user => user.name === ModeClicked);
      setModeClicked(user ? user.name : 'Unknown Animation');
    }, [ModeClicked]);

    const renderComponent = ()=>{
      switch(ModeClicked){
        case 'Bounce' :return <CanvasBounce/>;
        case 'Explosion' : return <CanvasExplosion/>
        case 'Fade In Out' : return <CanvasFadeInOut/>
        case 'Flip' : return <CanvasFlip/>
        case 'Glitch' : return <CanvasGlitch/>
        case 'Handwriting' : return <CanvasHandwriting/>
        case 'Morph' : return <CanvasMorph/>
        case 'ShadowGlow' : return <CanvasShadowGlow/>
        case 'Neon' : return <CanvasNeon/>
        case 'Burn' : return <CanvasBurn/>
      }
    }


  return <div className='flex justify-center items-center'>
    {renderComponent()}
    
  </div> 
}

export default DisplayText