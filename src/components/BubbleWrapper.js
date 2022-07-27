import React, { useEffect, useState } from 'react';
import './Bubbles.css'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import { useRef } from 'react';


const BubbleWrapper = () => {

    const randomX = (safari = false) => {
        return Math.floor(Math.random() * (window.innerWidth - 100))
    }
    const randomY = (safari = false) => {
        return Math.floor(Math.random() * (window.innerHeight - 100))
    }
    const randomDuration = (start = false) => {
        if(start) {
            return Math.random() * 8 + 1.5
        }
        return Math.floor(Math.random() * 10 + 5)
    }
    const randomScale = () => {
        return Math.random()*2.2 + 1
    }

    const bubbles = [useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation()]
   
    const animFunction = (index, start) => {
        if(start) {
            bubbles[index].start({
                x: randomX(),
                y: randomY(),
                transition: { duration: randomDuration(true) }
            })
            return
        }
        bubbles[index].start({
            x: randomX(),
            y: randomY(),          
            transition: { duration: randomDuration() },
           
        })
    } 

    const initial = (index) => {
        if(index%2 === 0) {
            return {
                x: window.innerWidth + 200,
                y: "50vh",
                scale: randomScale(),
                transition: {duration: 2}
            } 
        }
        return {
            x: -200,
            y: "50vh",
            scale: randomScale(),
            transition: {duration: 2}
        } 
    }
    

    useEffect(() => {
        // starts animations
        bubbles.forEach((item, index) => animFunction(index, true))

        // restart in case of window resize
        const restartAnimations = () => {
            bubbles.forEach((item, index) => animFunction(index))
        }
        window.addEventListener('resize', restartAnimations)

    }, [])
    const constraintsRef = useRef(null);

   

    const bubbleHTML = bubbles.map((bubble, i) => {
        return (
            <motion.div
                key={i}
                initial={initial(i)}
                drag
                dragConstraints={{top: 0, bottom: window.innerHeight - 100, left: 0, right: window.innerWidth - 100}}
                custom={i}
                className='bubble'
                animate={bubbles[i]}
                onAnimationComplete={() => {animFunction(i, false)}}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 70 }}
                /* onDragEnd={() => setTimeout(() => animFunction(i), 2000)} */
            />
        )
    })

    
    return (
        <div className='bubble-wrapper' ref={constraintsRef}>               
            {bubbleHTML}
        </div>
    );
}

export default BubbleWrapper;