import React, { useEffect } from 'react'

function Bell() {
    useEffect(()=>{



[...document.querySelectorAll('.effect')].forEach((x, i) => {
    const letters = [...x.textContent];
    const spans = letters.map(y => {
      const span = document.createElement('span');
      span.classList.add('effect-span')
      span.textContent = y;
      return span;
    });
    x.textContent = '';
    spans.forEach(span => x.appendChild(span));
    
    const delay = 0.1 * i;
    
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      delay
    });
    
    
    const duration = 0.4;
    const rotation = 35;
    const anchorX = 100;
    const anchorY = -150;
    const easePrefix = 'power2';
    
    tl.from(spans[0], {
      duration,
      rotation,
      transformOrigin: `${anchorX}px ${anchorY}px`,
      ease: `${easePrefix}.in`
    })
    
      tl.to(spans[spans.length - 1], {
      duration,
      rotation: -rotation,
      transformOrigin: `-${anchorX}px ${anchorY}px`,
        ease: `${easePrefix}.out`
    })
    
  })
    },[])
  return (
    <div>
        <div class='outer'>
  
  <div class='text-style-1 effect color-2'>LOU</div>
    <div class='text-style-1 effect'>BAGEL</div>
  </div>
    </div>
  )
}

export default Bell