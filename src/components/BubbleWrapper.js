import React, { useEffect, useState } from 'react';
import './Bubbles.css'

function BubbleWrapper(props) {

    const [bubbles, setBubbles] = useState([{left: 0}, {left: 80}, {left: 150}, {left: 250}]);

   

    

    const bubbleHTML = bubbles.map((item, index) => {
        return <div className='bubble' style={bubbles[index]} id={'b' + (index + 1)}></div>
    })

    return (
        <div className='bubble-wrapper'>
            <div className='color-bar2'></div>
            {bubbleHTML}
        </div>
    );
}

export default BubbleWrapper;