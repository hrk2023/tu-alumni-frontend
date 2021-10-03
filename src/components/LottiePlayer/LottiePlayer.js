import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function LottiePlayer({ lottieUrl }) {
    return (
        <Player autoplay loop
        src={lottieUrl}
        background = {'transparent'}
        className="lottie-player">
            <Controls visible={false}/>
        </Player>
    )
}

export default LottiePlayer 
