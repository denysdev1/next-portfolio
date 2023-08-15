import { getFeaturedProjects } from "../helpers/projects-util";
import { Hero } from "../components/Hero/Hero";
import { FeaturedProjects } from "../components/FeaturedProjects/FeaturedProjects";

export const metadata = {
  title: "Denys' Portfolio",
  description:
    "I do front-end development and here you can see my pet-projects.",
};

const getStaticProps = () => {
  return getFeaturedProjects();
};

const Page = () => {
  const projects = getStaticProps();

  return (
    <>
      <Hero />
      <FeaturedProjects projects={projects} />
    </>
  );
};

export default Page;
