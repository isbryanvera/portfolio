import "./Resume.css";
import { ResumeInformation } from "../../components/ResumeInformation/ResumeInformation";
import json from '../../data/resume.json';
import { useEffect, useState } from "react";
import { organizeByDate } from "../../utils/time"

const resume = organizeByDate(json)

function filterResumeByType (type) {
  const arrayFiltered = resume.filter((node) => {
    return node.type === type
  })
  return arrayFiltered
}

function Resume() {
  const [kindData,setKindData] = useState('Experience')
  const [numberOfElements,setnumberOfElements] = useState(3)
  const [filteredElements , setFilteredElements] = useState(filterResumeByType(kindData))

  const thereIsNotMoreElements = numberOfElements === 3
  const thereIsMoreElementsToShow = filteredElements.length > numberOfElements

  useEffect(() => {
    setFilteredElements(filterResumeByType(kindData));
  }, [kindData]);


  function changeBetweenExperienceAndEducationData({ target }) {
    const text = target.textContent;
    const isActive = target.classList.contains('active');
    setKindData(text);
  
    if (!isActive) {
      const parentUlElement = target.closest('ul');
      const tagsLi = parentUlElement.childNodes;
  
      tagsLi.forEach(li => {
        li.classList.remove('active');
      });
  
      target.classList.add('active');
      setnumberOfElements(3)
    }
  }

  function sliceDataByNumber () {
    return filteredElements.slice(numberOfElements - 3, numberOfElements)
  }

  function changePageToShowMoreData( {currentTarget} ) {
    // Get the selected tag
    const tagSelected = currentTarget;
    // Calculate the total number of elements of the same kind
    const totalKindDataElements = filteredElements.length;
    // Check if the number of elements is zero
    const isnumberOfElementsIsZero = thereIsNotMoreElements;
    // Check if there are more elements
    const thereIsMoreElements = totalKindDataElements > numberOfElements;
  
    // Check if the selected tag is 'arrow--down' or 'arrow--up'
    const isArrowDown = tagSelected.classList.contains('arrow--down');
    const isArrowUp = tagSelected.classList.contains('arrow--up');
  
    // If the selected tag is 'arrow--down' and there are more elements, increase the number of elements
    if(isArrowDown && thereIsMoreElements){
      setnumberOfElements(numberOfElements + 3);
    }
  
    // If the selected tag is 'arrow--up' and the number of elements is not zero, decrease the number of elements
    if(isArrowUp && !isnumberOfElementsIsZero){
      setnumberOfElements(numberOfElements - 3);
    }
  }

  return (
    <div className="resume">
      <ul className="resume__filter">
        <li className="active" onClick={changeBetweenExperienceAndEducationData}>Experience</li>
        <li onClick={changeBetweenExperienceAndEducationData}>Education</li>
      </ul>
      <div className="resume__experiences">
        <div className="vertical-line"></div>
        {
          sliceDataByNumber()
            .map((job,index) => {
              return (
              <ResumeInformation key={index} {...job}>
                {job.description}
              </ResumeInformation>)
            })
        }
      </div>
      <div className="resume__foter">
        <svg onClick={changePageToShowMoreData} className={`${thereIsMoreElementsToShow ? 'arrow' : ''} arrow--down`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9739 15.625L13.1266 7.22947C12.5079 6.15697 11.4954 6.15697 10.8766 7.22947L6.02937 15.6257C5.40987 16.6982 5.91687 17.5742 7.15437 17.5742H16.8489C18.0864 17.5742 18.5934 16.6975 17.9739 15.625Z" 
          fill={ thereIsMoreElementsToShow ? "#FF9C1A" : "#959595" } 
          fillOpacity="1"/>
        </svg>
        <svg onClick={changePageToShowMoreData} className={`${thereIsNotMoreElements ? '' : 'arrow'} arrow--up`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9739 15.625L13.1266 7.22947C12.5079 6.15697 11.4954 6.15697 10.8766 7.22947L6.02937 15.6257C5.40987 16.6982 5.91687 17.5742 7.15437 17.5742H16.8489C18.0864 17.5742 18.5934 16.6975 17.9739 15.625Z" 
          fill={ thereIsNotMoreElements ? "#959595" : "#FF9C1A"} 
          fillOpacity="1"/>
        </svg>
      </div>
    </div>
  )
}

export { Resume }