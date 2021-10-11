import "./TeamCard.css"
import user from "../images/user.png"
import React from 'react';
import {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
} from 'react-share';

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton
} from 'react-share';

export default function TeamCard(){
        return(
            <div id="c-body">
                <div id="card-container">
                    <div class="card">
                        <img src={user} id="c-img" alt="..."/>
                        <div class="name">Name</div>
                        <share>
                            <FacebookShareButton id="share" url="">
                                <FacebookIcon id="share" size={35} round={true}/>
                            </FacebookShareButton>

                            <LinkedinShareButton id="share" url="">
                                <LinkedinIcon id="share" size={35} round={true} />
                            </LinkedinShareButton>

                            <TwitterShareButton id="share" url="">
                                <TwitterIcon id="share" size={35} round={true} />
                            </TwitterShareButton>
                        </share>
                    </div>
                </div>
            </div>
    )
}