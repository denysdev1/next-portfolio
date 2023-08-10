import Head from "next/head";
import { AllProjects } from "../../components/AllProjects/AllProjects";
import { getAllProjects } from "../../helpers/projects-util";

const Projects = ({ projects }) => (
  <>
    <Head>
      <title>All Projects</title>
      <meta name="description" content="A list of all my projects!" />
    </Head>
    <AllProjects projects={projects} />
  </>
);

export default Projects;

export const getStaticProps = () => {
  const allProjects = getAllProjects();

  return {
    props: {
      projects: allProjects,
    },
  };
};
