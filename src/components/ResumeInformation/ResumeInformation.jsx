import "./ResumeInformation.css";

const ResumeInformation = ({date,position,company,children}) => {
  return (
    <div className="resume__card">
      <time className="date">{date}</time>
      <span className="circle"></span>
      <div className="description">
        <div className="description__header">
          <h3 className="description__title">{position}</h3>
          <p className="description__company">{company}</p>
        </div>
        <p className="description__text">{children}</p>
      </div>
    </div>
  )
}

export { ResumeInformation }
