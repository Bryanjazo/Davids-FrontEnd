import './HeadlineCard.css';
import test from '../images/test.png'

export default function HeadlineCard(){
    return(
        <div>
            <div className="hl-card">
                <div className="header">
                    <h1> Bitcoin Skyrockets Over $50,000.00 </h1>
                </div>
                <div className="sub-header">
                    <p className="category">
                        BlockChain
                    </p>
                    <p className="date">
                        October 6,2021
                    </p>
                    <p className="author">
                        Author
                    </p>
                </div>
                <div className="img" >
                    <img src={test} alt="" id="img"/>
                </div>
            </div>
            <div className="hl-card">
                <div className="header">
                    <h1> Bitcoin Skyrockets Over $50,000.00 </h1>
                </div>
                <div className="sub-header">
                    <p className="category">
                        BlockChain
                    </p>
                    <p className="date">
                        October 6,2021
                    </p>
                    <p className="author">
                        Author
                    </p>
                </div>
                <div className="img" >
                    <img src={test} alt="" id="img"/>
                </div>
            </div>
            <div className="hl-card">
                <div className="header">
                    <h1> Bitcoin Skyrockets Over $50,000.00 </h1>
                </div>
                <div className="sub-header">
                    <p className="category">
                        BlockChain
                    </p>
                    <p className="date">
                        October 6,2021
                    </p>
                    <p className="author">
                        Author
                    </p>
                </div>
                <div className="img" >
                    <img src={test} alt="" id="img"/>
                </div>
            </div>
        </div>
    )
}