import { AllProjects } from "../../components/AllProjects/AllProjects";
import { getAllProjects } from "../../helpers/projects-util";

export const metadata = {
  title: "All Projects",
  description: "A list of all my projects!",
};

const Projects = () => {
  const projects = getAllProjects();

  return <AllProjects projects={projects} />;
};

export default Projects;
