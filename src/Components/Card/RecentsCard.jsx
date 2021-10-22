import "./RecentsCard.css";
import moment from "moment";
import { Link } from "react-router-dom";

export default function RecentsCard(props) {
  return (
    <div className="recents-card">
      <Link
        className="LinkText"
        to={"/Blogs/" + props.slug.current}
        key={props.slug.current}
      >
        <div className="r-card">
          <div className="header">
            <h1> {props.title} </h1>
          </div>
          <div className="sub-header">
            <p className="author">{props.categories[1]}</p>
            <p className="date">
              {moment(props._createdAt).format("MMMM Do YYYY")}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
