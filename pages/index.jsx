import { Hero } from "../components/Hero/Hero";
import { FeaturedProjects } from "../components/FeaturedProjects/FeaturedProjects";
import { getFeaturedProjects } from "../helpers/projects-util";
import Head from "next/head";

const Home = ({ projects }) => (
  <>
    <Head>
      <title>Denys' Portfolio</title>
      <meta
        name="description"
        content="I do front-end development and here you can see my pet-projects."
      />
    </Head>
    <Hero />
    <FeaturedProjects projects={projects} />
  </>
);

export default Home;

export function getStaticProps() {
  const featuredProjects = getFeaturedProjects();

  return {
    props: {
      projects: featuredProjects,
    },
  };
}
