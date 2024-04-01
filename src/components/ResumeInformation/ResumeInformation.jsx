import "./ResumeInformation.css";

const ResumeInformation = () => {
  return (
    <div className="resume__card">
      <time className="date">01 Jun, 2015</time>
      <span className="circle"></span>
      <div className="description">
        <div className="description__header">
          <h3 className="description__title">UX/UI DEVELOPER</h3>
          <p className="description__company">Seidor</p>
        </div>
        <p className="description__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, commodi culpa repellendus sint doloribus ea mollitia porro, natus, itaque distinctio aspernatur minima voluptas incidunt facilis dolorem voluptatibus in ullam. Tempora.</p>
      </div>
    </div>
  )
}

export { ResumeInformation }
