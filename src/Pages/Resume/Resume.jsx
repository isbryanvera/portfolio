import { Label } from "../../components/Label/Label";
import { Brief } from "../../components/Brief/Brief";
import { Tag } from "../../components/Tag/Tag";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
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
        <div className="skills__container">
          <Label title="Work Skills"/>
          <div className="skills__container-tags">
            <Tag>NEXT.js</Tag>
            <Tag>React.js</Tag>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
            <Tag>Tailwind CSS</Tag>
            <Tag>Node.js</Tag>
            <Tag>SQL</Tag>
            <Tag>Storybook</Tag>
            <Tag>Git</Tag>
            <Tag>Figma</Tag>
            <Tag>Express.js</Tag>
            <Tag>vitest.js</Tag>
            <Tag>TypeScript</Tag>
            <Tag>UI</Tag>
          </div>
        </div>
        <div className="skills__container">
          <Label title="Soft Skills"/>
          <div className="skills__container-tags">
            <Tag>Problem Solving</Tag>
            <Tag>Teamwork</Tag>
            <Tag>Communication</Tag>
            <Tag>Adaptability</Tag>
            <Tag>Time Management</Tag>
            <Tag>Conflict Resolution</Tag>
            <Tag>Flexibility</Tag>
            <Tag>Organization</Tag>
            <Tag>Attention to Detail</Tag>
            <Tag>Positivity</Tag>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Resume }
