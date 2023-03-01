const Card = ({ item }) => {
  let badgeText;
  if (item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (item.location === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`../images/${item.coverImg}`}
        className="card--image"
        alt="swimmer"
      />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" alt="red star" />
        <span>{item.stats.rating}</span>
        <span className="gray">({item.stats.reviewCount}) • </span>
        <span className="gray">{item.location}</span>
      </div>
      <p className="card--title">{item.title}</p>
      <p className="card--price">
        <span className="bold">From ${item.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
