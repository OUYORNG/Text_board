import React, { useContext } from 'react'
import MappingModel from './Card/MappingModel'
import { Shared } from './Shared'

function Mode() {
  const style = {
    background:' rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(5px)',
    webkitBackdropFilter:' blur(5px)',
    bordeRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.18)'
  }
  return (
    <div  class='
    ml-4 mr-4 mb-4 mt-2
    p-4
    rounded-md
    backdrop-blur bg-white/15
    '>
    <MappingModel/>
    </div>
  )
}

export default Mode