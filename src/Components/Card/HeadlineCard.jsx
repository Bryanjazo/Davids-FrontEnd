import "./HeadlineCard.css";
import test from "../images/test.png";
import "./HeadlineCard.css";

export default function HeadlineCard() {
  return (
    <div className="card-container">
      <div className="hl-card-headline">
        <div className="header">
          <h1>
            {" "}
            Bitcoin Rockets to Over $50k as ‘Uptober’ Rally Prompts All-Time
            High Predictions{" "}
          </h1>
        </div>
        <div className="sub-header">
          <p className="category">
            <i class="far fa-clone"></i> BlockChain
          </p>
          <p className="date">
            <i class="far fa-calendar"></i> October 6,2021
          </p>
          <p className="author">
            <i class="far fa-user-circle"></i> Author
          </p>
        </div>
        <div className="img">
          <img src={test} alt="" id="img" />
        </div>
      </div>
      <div className="hl-card-headline">
        <div className="header">
          <h1>
            {" "}
            Bitcoin Rockets to Over $50k as ‘Uptober’ Rally Prompts All-Time
            High Predictions
          </h1>
        </div>
        <div className="sub-header">
          <p className="category">
            <i class="far fa-clone"></i> BlockChain
          </p>
          <p className="date">
            <i class="far fa-calendar"></i> October 6,2021
          </p>
          <p className="author">
            <i class="far fa-user-circle"></i> Author
          </p>
        </div>
        <div className="img">
          <img src={test} alt="" id="img" />
        </div>
      </div>
      <div className="hl-card-headline">
        <div className="header">
          <h1>
            {" "}
            Bitcoin Rockets to Over $50k as ‘Uptober’ Rally Prompts All-Time
            High Predictions{" "}
          </h1>
        </div>
        <div className="sub-header">
          <p className="category">
            <i class="far fa-clone"></i> BlockChain
          </p>
          <p className="date">
            <i class="far fa-calendar"></i> October 6,2021
          </p>
          <p className="author">
            <i class="far fa-user-circle"></i> Author
          </p>
        </div>
        <div className="img">
          <img src={test} alt="" id="img" />
        </div>
      </div>
    </div>
  );
}
