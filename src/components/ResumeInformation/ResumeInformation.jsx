import "./ResumeInformation.css";
import { humanizeDate } from '../../utils/time'

const ResumeInformation = ({date,endDate,position,company,children}) => {
  return (
    <div className="resume__card">
      <div className="resume__position">
        <span className="resume-circle"></span>
        <p className="description__company">{company}</p>
      </div>
      <div className="description">
        <div className="description__header">
          <h3 className="description__title">{position}</h3>
          <div>
            <time className="date">{humanizeDate(date)}</time>
            <span> - </span>
            <time className="date">{humanizeDate(endDate)}</time>
          </div>
        </div>
        <p className="description__text">{children}</p>
      </div>
    </div>
  )
}

export { ResumeInformation }
