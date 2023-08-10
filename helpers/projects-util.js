import fs from "fs";
import matter from "gray-matter";
import path from "path";

const projectsDirectory = path.join(process.cwd(), "projects");

export const getProjectFiles = () => fs.readdirSync(projectsDirectory);

export const getProjectData = (projectIdentifier) => {
  const projectSlug = projectIdentifier.replace(/\.md$/, "");
  const filePath = path.join(projectsDirectory, `${projectSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: projectSlug,
    ...data,
    content,
  };
};

export const getAllProjects = () => {
  const projectFiles = getProjectFiles();
  const allProjects = projectFiles.map((projectFile) => getProjectData(projectFile));

  allProjects.sort((projectA, projectB) => projectA.date > projectB.date ? -1 : 1)

  return allProjects;
};

export const getFeaturedProjects = () => {
  const allProjects = getAllProjects();

  return allProjects.filter(project => project.isFeatured);
}
