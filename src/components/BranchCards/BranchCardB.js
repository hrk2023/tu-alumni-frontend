import React from 'react';
import './BranchCards.css';

import {BiRightArrowAlt} from 'react-icons/bi';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function BranchCardsB({bheader, bdesc, blink, lottie}) {
    return (
        <div className="branchcardsB-wrapper">
            <div className="branchcards-left-wrapper">
                <div className="branchcards-header">
                    {bheader}
                </div>
                <div className="branchcards-desc">
                    {bdesc}
                </div>
                <div className="branchcards-link">
                    <a href={blink} className="card-link"> Search <BiRightArrowAlt /> </a>
                </div>
            </div>
            <div className="branchcards-right-wrapper">
            <Player autoplay loop
            src={lottie}
            background = {'transparent'}
            className="lottie-player"
            >
                <Controls visible={false}/>
            </Player>
            </div>
        </div>
    )
}

export default BranchCardsB
