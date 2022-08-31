import React, { useState } from 'react';
import '../styles/color-card.scss';

const ColorCard = () => {

    const [background, setBackground] = useState( { red:0, green:0, blue:0 } );

    let intervalID;

    function updateBackground() {

        setInterval( () => {
            setBackground({
                red: Math.floor(Math.random() * 255),
                green: Math.floor(Math.random() * 255),
                blue: Math.floor(Math.random() * 255),
            })
        }, 1000)

    }

    function stopUpdateBackground() {
        clearInterval(intervalID);
    }

    const initialBackground = {
        backgroundColor: `rgb(${background.red}, ${background.green}, ${background.blue})`
    }

    return (
        
        <div 
            style={ initialBackground } 
            className="color-card"
            onMouseOver={ updateBackground }
            onMouseOut={ stopUpdateBackground }>
        </div>
    );
}

export default ColorCard;