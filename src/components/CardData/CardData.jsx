import "./CardData.css";

function CardData({date,title,place}) {
  return (
    <>
      <div className="card__node">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>{place}</p>
      </div>
    </>
  )
}

export { CardData }
