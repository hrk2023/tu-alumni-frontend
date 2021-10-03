import React from 'react';
import './BranchCards.css';

import {BiRightArrowAlt} from 'react-icons/bi';
import LottiePlayer from '../LottiePlayer/LottiePlayer';

function BranchCardsA({bheader, bdesc, blink, lottie}) {
    return (
        <div className="branchcardsA-wrapper">
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
                <LottiePlayer lottieUrl={lottie}/>
            </div>
        </div>
    )
}

export default BranchCardsA
