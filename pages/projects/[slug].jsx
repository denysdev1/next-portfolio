import Head from "next/head";
import { ProjectContent } from "../../components/project-details/ProjectContent/ProjectContent";
import { getProjectData, getProjectFiles } from "../../helpers/projects-util";

const Project = ({ project }) => (
  <>
    <Head>
      <title>{project.title}</title>
      <meta name="description" content={project.shortDescription} />
    </Head>
    <ProjectContent project={project} />
  </>
);

export default Project;

export const getStaticProps = (context) => {
  const { slug } = context.params;
  const projectData = getProjectData(slug);

  return {
    props: {
      project: projectData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const projectFilesNames = getProjectFiles();
  const slugs = projectFilesNames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};
