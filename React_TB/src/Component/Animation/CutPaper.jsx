import React from 'react'
import './CutPaper.css'
function CutPaper() {
    const Text = ({value}) => (
        <div className='text'>
          {value.split('').map((char, i) => (
            <div className='letter' style={{'--delay': `${i*0.2}s`}}>
              <span className='source'>{char}</span>
              {/* <span className='shadow'>{char}</span> */}
              <span className='overlay'>{char}</span>
            </div>
          ))}
        </div>
      );
  return (
    <div style={{
      height:150,
      position:'relative',
      top: -20,
      color: 'white'
    }}>
        <Text value="Hello"/>
    </div>
  )
}

export default CutPaper