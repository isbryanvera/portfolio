import "./Resume.css";
import { ResumeInformation } from "../../components/ResumeInformation/ResumeInformation";

function Resume() {
  return (
    <div className="resume">
      <ul className="resume__filter">
        <li>Experience</li>
        <li>Education</li>
      </ul>
      <div className="resume__experiences">
        <div className="vertical-line"></div>
        <ResumeInformation></ResumeInformation>
        <ResumeInformation></ResumeInformation>
        <ResumeInformation></ResumeInformation>
      </div>
      <div className="resume__foter">
        <svg className="arrow arrow--down" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9739 15.625L13.1266 7.22947C12.5079 6.15697 11.4954 6.15697 10.8766 7.22947L6.02937 15.6257C5.40987 16.6982 5.91687 17.5742 7.15437 17.5742H16.8489C18.0864 17.5742 18.5934 16.6975 17.9739 15.625Z" fill="#0B0909" fillOpacity="0.5"/>
        </svg>
        <svg className="arrow arrow--up" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9739 15.625L13.1266 7.22947C12.5079 6.15697 11.4954 6.15697 10.8766 7.22947L6.02937 15.6257C5.40987 16.6982 5.91687 17.5742 7.15437 17.5742H16.8489C18.0864 17.5742 18.5934 16.6975 17.9739 15.625Z" fill="#0B0909" fillOpacity="0.5"/>
        </svg>
      </div>
    </div>
  )
}

export { Resume }
