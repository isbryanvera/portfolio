import { Label } from "../Label/Label";
import { Brief } from "../Brief/Brief";
import "./Resume.css";

function Resume() {
  return (
    <div>
      <div className="information">
        <Brief 
          icon="/src/assets/icon-park-outline_degree-hat.svg" 
          title='Education'
          date='2019-2023'
          place='University of the Philippines Los Baños'  
        />
        <Brief 
          icon="/src/assets/humbleicons_briefcase.svg" 
          title='Experience'
          date='2023-2024'
          place='University of California, Berkeley'
        />
      </div>
      <div className="skills">
        <div className="work-skills">
          <Label/>
          <div className="work-skills__container">

          </div>
        </div>
        <div className="soft-skills"></div>
      </div>
    </div>
  )
}

export { Resume }
