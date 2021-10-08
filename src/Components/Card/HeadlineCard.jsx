import './HeadlineCard.css';
import test from '../images/test.png'
import './HeadlineCard.css'
export default function HeadlineCard(){
    return(
        <div>
            <div className="hl-card">
                <div className="header">
                    <h1> Bitcoin Skyrockets Over $50,000.00 </h1>
                </div>
                <div className="sub-header">
                    <p className="category">
                        Category
                    </p>
                    <p className="date">
                        Date
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
                        Category
                    </p>
                    <p className="date">
                        Date
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
                        Category
                    </p>
                    <p className="date">
                        Date
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