import React, { useEffect, useState } from 'react';
import './Bubbles.css'

function BubbleWrapper(props) {

    const [bubbles, setBubbles] = useState([]);
    const [startup, setStartup] = useState(0);
  
    

    useEffect(() => {
        let bubbleArr = [];

    for (let i = 0; i < 15; i++) {
        let randomLeft = Math.floor(Math.random()*90 + 5);
        let randomTop = Math.floor(Math.random()*90 + 5);
        bubbleArr.push({left: randomLeft + 'vw', top: randomTop + 'vh', transform: `scale(0.5) translate(0px, 0px)`})

        /* let random = Math.floor(Math.random()*101);
        let random2 = Math.floor(Math.random()*101);
        bubbleArr.push({left: random + '%', top: random2 + '%'}) */
    }
        setBubbles(bubbleArr)
    }, [])

    // useEffect(() => {
    //     console.log('started')
    //     if (startup > 0 || bubbles.length === 0) {return}
    //     let bubbleArr = [...bubbles];
    //     bubbleArr.forEach((bubble) => {
    //         /* bubble = {...bubble, transform: `scale(1) translate(0px, 0px)`} */
            
    //     })
    //     console.log(bubbleArr)
    //     setBubbles(bubbleArr)
    //     setStartup(1)
    //     console.log('finished')
    // }, [bubbles])
    

 /* e.target.id.split('')[1]) */
    function animEnd(e) {
        const targetBubble = parseInt(e.target.id);
        let bubbleArr = [...bubbles];
        console.log(bubbleArr[targetBubble]);
        console.log('Animation start!')
        let randomY = Math.floor(Math.random()*85 + 3);
        let randomX = Math.floor(Math.random()*88 + 3);
        let randomScale = (Math.random()*1.6 + 0.7);
        let randomTranslateY = (randomY - parseInt(bubbleArr[targetBubble].top.split('vh')[0]))/randomScale;
        let randomTranslateX = (randomX - parseInt(bubbleArr[targetBubble].left.split('vw')[0]))/randomScale; 
        let random2 = Math.floor(Math.random()*89) + 2; 
        console.log('oy')
        /* let randomWidth = Math.floor(Math.random()*101) + 40; */
        /* bubbleArr[targetBubble] = {left: random + '%', top: random2 + '%', width: randomWidth, height: randomWidth}; */
        bubbleArr[targetBubble] = {...bubbleArr[targetBubble], transform: `scale(${randomScale}) translate(${randomTranslateX}vw, ${randomTranslateY}vh)`, opacity: '1'};
        console.log(randomTranslateX, randomTranslateY)
        setBubbles(bubbleArr);
    }
    

    const bubbleHTML = bubbles.map((item, index) => {
        return <div className='bubble' key={index} onAnimationStart={animEnd} onAnimationEnd={(e) => {animEnd(e); console.log('Anim end')}} onTransitionEnd={(e) => {animEnd(e); console.log('transition end')}} style={bubbles[index]} id={index}></div>
    })

    return (
        <div className='bubble-wrapper'>
            <div className='color-bar2'></div>

            
            
            {bubbleHTML}
        </div>
    );
}

export default BubbleWrapper;