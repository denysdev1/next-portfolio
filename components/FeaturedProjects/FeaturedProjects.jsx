import { ProjectsList } from "../ProjectsList/ProjectsList";
import classes from "./FeaturedProjects.module.css";

export const FeaturedProjects = ({ projects }) => (
  <section className={classes.latest}>
    <h2>Featured Projects</h2>
    <ProjectsList projects={projects} />
  </section>
);
