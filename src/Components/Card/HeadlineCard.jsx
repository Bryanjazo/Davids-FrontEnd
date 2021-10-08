import './HeadlineCard.css';

export default function HeadlineCard(){
    return(
        <div>
            <div className="hl-card">
                <div className="header">
                    <h1> Bitcoin Skyrockets Over $50,000.00 </h1>
                </div>
                <div className="sub-header">
                    <p className="catagory">
                        Category
                    </p>
                    <p className="date">
                        Date
                    </p>
                    <p className="author">
                        Author
                    </p>
                </div>
                <div className="hl-card-img">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}