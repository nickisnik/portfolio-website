import React, { useEffect, useState } from 'react';
import './Bubbles.css'

function BubbleWrapper(props) {

    const [bubbles, setBubbles] = useState([]);
  
    let bubbleArr = [];
    for (let i = 0; i < 15; i++) {
        let random = Math.floor(Math.random()*101);
        let random2 = Math.floor(Math.random()*101);
        bubbleArr.push({left: random + '%', top: random2 + '%'})
    }

    useEffect(() => {
        setBubbles(bubbleArr)
    }, [])
 /* e.target.id.split('')[1]) */
    function animEnd(e) {
        const targetBubble = parseInt(e.target.id);
        console.log(targetBubble + 'DONE')
        let bubbleArr = [...bubbles];
        let random = Math.floor(Math.random()*95);
        let random2 = Math.floor(Math.random()*89) + 2;
        let randomWidth = Math.floor(Math.random()*101) + 40;
        bubbleArr[targetBubble] = {left: random + '%', top: random2 + '%', width: randomWidth, height: randomWidth};
        setBubbles(bubbleArr);
    }
    

    const bubbleHTML = bubbles.map((item, index) => {
        return <div className='bubble' key={index} onAnimationStart={animEnd} onTransitionEnd={animEnd} style={bubbles[index]} id={index}></div>
    })

    return (
        <div className='bubble-wrapper'>
            <div className='color-bar2'></div>

            
            
            {bubbleHTML}
        </div>
    );
}

export default BubbleWrapper;