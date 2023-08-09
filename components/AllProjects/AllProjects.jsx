import { ProjectsList } from "../ProjectsList/ProjectsList";
import classes from "./AllProjects.module.css";

export const AllProjects = ({ projects }) => (
  <section className={classes.project}>
    <h2>All Projects</h2>
    <ProjectsList projects={projects} />
  </section>
);
