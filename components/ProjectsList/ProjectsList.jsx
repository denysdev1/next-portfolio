import classes from "./ProjectsList.module.css";
import { ProjectItem } from "../ProjectItem/ProjectItem";

export const ProjectsList = ({ projects }) => (
  <ul className={classes.grid}>
    {projects.map((project) => (
      <ProjectItem key={project.slug} project={project} />
    ))}
  </ul>
);
