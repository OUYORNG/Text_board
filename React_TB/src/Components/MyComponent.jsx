import styled, { keyframes } from 'styled-components';
import { SharedText } from './SharedText';
import { useContext } from 'react';


const scrollLeft = keyframes`
  0% {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(-100%);
  }
  100% {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(100%);
  }
`;

const scrollRight = keyframes`
    0%   { 
    -moz-transform: translateX(100%); 
    -webkit-transform: translateX(100%); 
    transform: translateX(100%); 		
    }
    100% { 
    -moz-transform: translateX(-100%); 
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%); 
    }
`;

const Stop = keyframes`
    0%   { 
    -moz-transform: translateX(100%); 
    -webkit-transform: translateX(100%); 
    transform: translateX(0%); 		
    }
    100% { 
    -moz-transform: translateX(-100%); 
    -webkit-transform: translateX(-100%);
    transform: translateX(0%); 
    }
`;
const blinkanimated = keyframes `
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

// animation: ${direction ? scrollLeft : scrollRight} 10s linear infinite;
const MyComponent = () => {
    const {direction,setDirection} = useContext(SharedText)
    const {text,setText} = useContext(SharedText)
    const {Speed,setSpeed} = useContext(SharedText)
    const {Blink,setBlink} = useContext(SharedText)
    const {BlinkSpeed,setBlinkSpeed} = useContext(SharedText)

    const AnimatedComponent = styled.div`
      animation: ${direction === 1 ? scrollLeft : direction === 0? scrollRight: Stop} ${Speed}s  linear infinite ,${Blink ? blinkanimated:"" } ${BlinkSpeed}s infinite;
      font: 50px;
      color: black;
      width: 100%;
      height: 100%;
      margin: 0;
      line-height: 50px;
      text-align: center;
      -moz-transform: translateX(100%);
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    `;
    
    return <div>
      <AnimatedComponent>{text}</AnimatedComponent>
  </div>
};

export default MyComponent;
