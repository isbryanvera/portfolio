import "./Resume.css";
import { ResumeInformation } from "../../components/ResumeInformation/ResumeInformation";
import resume from '../../data/resume.json';
import { useState } from "react";

function Resume() {
  const [kindData,setKindData] = useState('Experience')
  const [numberOfElements,setnumberOfElements] = useState(3)
  
  function navigate({ target }) {
    const text = target.textContent;
    const isActive = target.classList.contains('active');
  
    if (!isActive) {
      const parentTag = target.closest('ul');
      const tagsLi = parentTag.childNodes;
  
      tagsLi.forEach(li => {
        li.classList.remove('active');
      });
  
      target.classList.add('active');
      setKindData(text);
      setnumberOfElements(3)
    }
  }

  function filterResumeInformation (json) {
    const arrayFiltered = json.filter((node) => {
      return node.type === kindData
    }).slice(numberOfElements - 3, numberOfElements)

    return arrayFiltered
  }

  function changePage( {currentTarget} ) {
    const tagSelected = currentTarget
    const totalKindDataElements = resume.filter(({type}) => type === kindData).length
    const isnumberOfElementsIsZero = numberOfElements === 3
    const thereIsMoreElements = totalKindDataElements > numberOfElements

    console.log(thereIsMoreElements);
    if(tagSelected.classList.contains('arrow--down') && thereIsMoreElements){
        console.log('entre')
        setnumberOfElements(numberOfElements + 3)
    }
    if(tagSelected.classList.contains('arrow--up') && !isnumberOfElementsIsZero){
      setnumberOfElements(numberOfElements - 3)
    }
  }

  return (
    <div className="resume">
      <ul className="resume__filter">
        <li className="active" onClick={navigate}>Experience</li>
        <li onClick={navigate}>Education</li>
      </ul>
      <div className="resume__experiences">
        <div className="vertical-line"></div>
        {
          filterResumeInformation(resume)
            .map((job,index) => {
              return (
              <ResumeInformation key={index} {...job}>
                {job.description}
              </ResumeInformation>)
            })
        }
      </div>
      <div className="resume__foter">
        <svg onClick={changePage} className="arrow arrow--down" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9739 15.625L13.1266 7.22947C12.5079 6.15697 11.4954 6.15697 10.8766 7.22947L6.02937 15.6257C5.40987 16.6982 5.91687 17.5742 7.15437 17.5742H16.8489C18.0864 17.5742 18.5934 16.6975 17.9739 15.625Z" fill= "#0B0909" fillOpacity="0.5"/>
        </svg>
        <svg onClick={changePage} className="arrow arrow--up" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9739 15.625L13.1266 7.22947C12.5079 6.15697 11.4954 6.15697 10.8766 7.22947L6.02937 15.6257C5.40987 16.6982 5.91687 17.5742 7.15437 17.5742H16.8489C18.0864 17.5742 18.5934 16.6975 17.9739 15.625Z" fill= "#0B0909" fillOpacity="0.5"/>
        </svg>
      </div>
    </div>
  )
}

export { Resume }
