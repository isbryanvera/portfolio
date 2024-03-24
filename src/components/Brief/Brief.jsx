import { Label } from "../Label/Label";
import { CardData } from "../CardData/CardData";
import "./Brief.css";

function Brief({icon, title, date, place}) {
  return (
    <div className="informative-section">
      <Label icon={icon} title={title}/>
      <CardData date={date} title="Software Development" place={place}/>
      <CardData date={date} title="Disaster Management" place={place}/>
    </div>
  )
}

export { Brief }
