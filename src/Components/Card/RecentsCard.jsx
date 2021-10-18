import "./RecentsCard.css";

export default function RecentsCard(props) {
  console.log(props);

  const handleClick = (e, props) => {
    e.preventDefault();

    console.log(props);
  };
  return (
    <div className="recents-card">
      <div className="r-card" onClick={(e) => handleClick(e, props)}>
        <div className="header">
          <h1> {props.header} </h1>
        </div>
        <div className="sub-header">
          <p className="author">{props.catergoryByDate}</p>
          <p className="date">{props.date}</p>
        </div>
      </div>
    </div>
  );
}
