import "./HeadlineCard.css";
import test from "../images/test.png";
import "./HeadlineCard.css";
import TwoCoins from "../images/TwoCoins.png";
import DarkBitcoin from "../images/DarkBitcoin.png";
import ManCoin from "../images/ManCoin.png";
import moment from "moment";
export default function HeadlineCard(blogs) {
  return (
    <div className="card-container">
      {blogs.blogs.map((blog) =>
        blog
          .filter((info) => info.categories[0] === "Headlines")
          .map((arr) => (
            <div className="hl-card-headline">
              <div className="header">
                <h1> {arr.title} </h1>
              </div>
              <div className="sub-header">
                <p className="category">
                  <i class="far fa-clone"></i> {arr.categories[0]}
                </p>
                <p className="date">
                  <i class="far fa-calendar"></i>{" "}
                  {moment(arr._createdAt).format("MMMM Do YYYY")}
                </p>
                <p className="author">
                  <i class="far fa-user-circle"></i> {arr.authorName}
                </p>
              </div>
              <div className="img">
                <img src={arr.mainImage.asset.url} alt="" id="img" />
              </div>
            </div>
          ))
      )}
    </div>
  );
}
