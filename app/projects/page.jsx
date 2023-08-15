import { AllProjects } from "../../components/AllProjects/AllProjects";
import { getAllProjects } from "../../helpers/projects-util";

export const metadata = {
  title: "All Projects",
  description: "A list of all my projects!",
};

export const getStaticProps = () => {
  return getAllProjects();
};

const Projects = () => {
  const projects = getStaticProps();

  return <AllProjects projects={projects} />;
};

export default Projects;
