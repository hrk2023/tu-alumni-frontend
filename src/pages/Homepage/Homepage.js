import React from 'react';
import './Homepage.css';
import Hero from '../../static/assets/hero_img.jpg';
import {BiRightArrowAlt} from 'react-icons/bi';
import BranchCardsA from '../../components/BranchCards/BranchCardA';
import BranchCardsB from '../../components/BranchCards/BranchCardB';
import Navbar from '../../components/Navbar/Navbar';
import branchData from '../../resources/siteData';

function Homepage() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="homepage-wrapper">
                <div className="homepage-banner-wrapper">
                    <div className="homepage-banner-left">
                        <div className="homepage-banner-header">
                            <span id="h0">Tezpur University, Alumni Portal</span><br/>
                            <span id="h1">If you can dream it,</span><br/>
                            <span id="h2">you can do it</span>
                        </div>
                        <div className="homepage-banner-desc">
                            It has survived not only five centuries, but also 
                            the leap into electronic typesetting, remaining 
                            essentially unchanged. It was popularised in the 
                            1960s with the release of Letraset sheets containing 
                            Lorem Ipsum passages.
                        </div>
                        <div className="homepage-banner-btn">
                            <button className="homepage-job-btn">
                                Search Jobs <BiRightArrowAlt/>
                            </button>
                        </div>
                    </div>
                    <div className="homepage-banner-right">
                        <img src={Hero} id="banner" alt="computer-and-related-stuff" />
                    </div>
                </div>

                
                <div className="branchlist-header">
                    Search Jobs By Branch
                </div>

                <div className="branchlist-wrapper">
                    {branchData.map(item => 
                        <React.Fragment>
                            {item.flip === true && <BranchCardsA bheader={item.branch_name}
                                bdesc={item.branch_desc}
                                blink={item.branch_link}
                                lottie={item.lottie} />
                            }
                            {item.flip === false && <BranchCardsB bheader={item.branch_name}
                                bdesc={item.branch_desc}
                                blink={item.branch_link}
                                lottie={item.lottie} />
                            
                            }
                        </React.Fragment>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Homepage
