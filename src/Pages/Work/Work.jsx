import "./Work.css";
import { Filter } from "../../components/Filter/Filter";
import { Project } from "../../components/Project/Project";

function Work() {
  return (
    <section className="work">
      <Filter></Filter>
      <div className="grid__projects">
        <Project
          title="Project 1"
          description="This is a project"
          tags={["Web Development", "React.js", "Tailwind CSS"]}
          img={"https://images.unsplash.com/photo-1711330980173-f308124e153d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
        <Project
          title="Project 2"
          description="This is another project"
          tags={["Design", "Figma", "UI/UX"]}
          img={"https://images.unsplash.com/photo-1711330980173-f308124e153d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
        <Project
          title="Project 3"
          description="This is a third project"
          tags={["Tools", "Git", "Storybook"]}
          img={"https://images.unsplash.com/photo-1711330980173-f308124e153d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
        <Project
          title="Project 4"
          description="This is another project"
          tags={["Design", "Figma", "UI/UX"]}
          img={"https://images.unsplash.com/photo-1711330980173-f308124e153d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
      </div>
    </section>
  )
}

export { Work }
