import { Hero } from "../components/Hero/Hero";
import { FeaturedProjects } from "../components/FeaturedProjects/FeaturedProjects";

const DUMMY_PROJECTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    shortDescription:
      "NextJS is the React framework for production - it makes building fullstack React applications easier",
    date: "2023-08-09",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    shortDescription:
      "NextJS is the React framework for production - it makes building fullstack React applications easier",
    date: "2023-08-09",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    shortDescription:
      "NextJS is the React framework for production - it makes building fullstack React applications easier",
    date: "2023-08-09",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    shortDescription:
      "NextJS is the React framework for production - it makes building fullstack React applications easier",
    date: "2023-08-09",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects projects={DUMMY_PROJECTS} />
    </>
  );
};

export default Home;
