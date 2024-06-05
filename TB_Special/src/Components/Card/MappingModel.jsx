import React from 'react'
import GifLink from './GIF/GifLink.js'
import Model from './Model.jsx'

function MappingModel() {
    function createEntry(gif){
        return <Model
        AnimationName = {gif.name}
        gif = {gif.url}
        />
      }
  return <div className='
  grid grid-cols-6 gap-4
  ml-4 mr-4 mb-4 mt-2
  '>
    {GifLink.map(createEntry)}
  </div>
}

export default MappingModel