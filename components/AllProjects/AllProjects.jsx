import { ProjectsList } from "../ProjectsList/ProjectsList";
import classes from "./AllProjects.module.css";

export const AllProjects = ({ projects }) => (
  <section className={classes.projects}>
    <h1>All Projects</h1>
    <ProjectsList projects={projects} />
  </section>
);
