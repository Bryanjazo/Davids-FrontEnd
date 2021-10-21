import React from 'react'
import './sideNavBar.css'

import Hamburger from "./Hamburger";

export default function SideNavBar() {


    return (
        <div id='menu-slide' className='menu-slide menu-open'>
            <div id='nav-close' className='menu-close-btn'>
               
                <span className="icon"></span>
                <div className='nav-txt'>Sections</div>
            </div>
            <div className='slider-category-items'>

            <div className='menu-slide-out-container'>
                <ul id='menu-slidout-1' className='menu'>
                    <li id="menu-item-1763" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-477 current_page_item menu-item-1763"><a href="https://blockworks.co/newsletter/" aria-current="page">NEWSLETTER</a></li>
                    <li id="menu-item-1762" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1762"><a href="#">PODCASTS</a></li>
                    <li id="menu-item-787" className="menu-item menu-item-type-post_type_archive menu-item-object-events menu-item-787"><a href="#">COIN SWAP</a></li>
                    <li id="menu-item-788" className="menu-item menu-item-type-post_type_archive menu-item-object-webinars menu-item-788"><a href="#">BLOCKCHAIN</a></li> 
                </ul>

            </div>
            </div>
            <div className="nav-txt">Categories</div>
            <div className="slider-category-items">
                <div className="menu-slide-out-2-container"><ul id="menu-slideout-2" className="menu"><li id="menu-item-2749" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2749"><a href="https://blockworks.co/category/asset-management/">Asset Management</a></li>
<li id="menu-item-2751" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2751"><a href="#">Financial Services</a></li>
<li id="menu-item-3161" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3161"><a href="#">Profiles</a></li>
<li id="menu-item-5633" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-5633"><a href="#">DeFi</a></li>
<li id="menu-item-2752" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2752"><a href="#">Macro</a></li>
<li id="menu-item-2753" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2753"><a href="#">Markets</a></li>
<li id="menu-item-9235" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-9235"><a href="#">Metaverse</a></li>
<li id="menu-item-4426" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-4426"><a href="#">Regulation</a></li>
<li id="menu-item-2750" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2750"><a href="#">Education</a></li>
<li id="menu-item-2754" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2754"><a href="#">Op-Ed</a></li>
<li id="menu-item-6153" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-6153"><a href="#">Sponsored</a></li>
</ul>
                </div>
            </div>

            <div className="card-type slide-query">

                <div className="card">
                        <a href="#" className="imglink">
                                <div className="imgbox">
                                <img alt="" data-src="https://blockworks.co/wp-content/uploads/2021/05/DAS_2021_LONDON-scaled.jpg" className=" ls-is-cached lazyloaded" src="https://blockworks.co/wp-content/uploads/2021/05/DAS_2021_LONDON-scaled.jpg"/>
                                <noscript>
                                <img src="https://blockworks.co/wp-content/uploads/2021/05/DAS_2021_LONDON-scaled.jpg"alt="" />
                                </noscript>
                                </div>
                        </a>
                    <div className="card-content">
                        <div className="tags">
                            <p className="post-tag">events</p>
                        </div>
                        <a href="h#" className="card_title">Digital Asset Summit 2021 | London</a>

                                <div className="post-creation-details">
                                <span className="author-wrap">By
                                <a href="#" title="Posts by Julie Muroff" className="author url fn" rel="author">Julie Muroff</a></span>
                                <span className="slash-divider">/</span>
                                <span className="posted-on">
                                <time className="entry-date published" datetime="2021-05-05T13:18:58-04:00">May 5, 2021</time></span></div>
                        
                        <div className="card_excerpt"><p>DAS is the institutionally focused crypto conference for asset managers and financial services professionals. Returning in 2021 as a two day, in person event, industry leaders from the world of finance and digital assets will gather to discuss crypto from the […]</p>
                        </div>
                        
                    <a href="#" className="button">Subscribe Now</a>
                        </div>
                </div>

            </div>
            <div className="slide-footer">
                <div className="slide-logo"><img alt="" data-src="https://blockworks.co/wp-content/themes/blockworks/images/logo-blue.png" className=" ls-is-cached lazyloaded" src="https://blockworks.co/wp-content/themes/blockworks/images/logo-blue.png"/><noscript><img src="https://blockworks.co/wp-content/themes/blockworks/images/logo-blue.png"
                        alt=""/>

                        </noscript>
                        </div>
                <div className="slide-social">
                    <span>follow us</span>
                    <div>
                                                                        <a target="_blank" href="https://twitter.com/Blockworks_"></a>
                                                <a target="_blank" href="https://www.instagram.com/blockworks__/"></a>
                                                <a target="_blank" href="https://www.linkedin.com/company/the-blockworks-group"></a>
                                                <a target="_blank" href="https://www.youtube.com/channel/UCkrwgzhIBKccuDsi_SvZtnQ"></a>
                                                                    </div>
                </div>
            </div>

        </div>
    )
}
