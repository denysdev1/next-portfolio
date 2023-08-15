import { ProjectContent } from "../../../components/project-details/ProjectContent/ProjectContent";
import {
  getProjectData,
  getProjectFiles,
} from "../../../helpers/projects-util";

export const revalidate = 0.6;
export const dynamicParams = false;

export const generateMetadata = ({ params }) => {
  const { slug } = params;
  const projectData = getProjectData(slug);

  return {
    title: projectData.title,
    description: projectData.shortDescription,
  };
};

export const generateStaticParams = () => {
  const projectFilesNames = getProjectFiles();
  const slugs = projectFilesNames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );

  return slugs.map((slug) => ({ slug }));
};

const ProjectDetails = ({ params }) => {
  const project = getProjectData(params.slug);

  return <ProjectContent project={project} />;
};

export default ProjectDetails;
