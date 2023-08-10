import classes from "./ProjectContent.module.css";
import { ProjectHeader } from "../ProjectHeader/ProjectHeader";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const ProjectContent = ({ project }) => {
  const imagePath = `/images/projects/${project.slug}/${project.image}`;

  return (
    <article className={classes.content}>
      <ProjectHeader title={project.title} image={imagePath} />
      <ReactMarkdown
        components={{
          p({ node, children }) {
            if (node.children[0].tagName === "img") {
              const image = node.children[0];

              return (
                <div className={classes.image}>
                  <Image
                    src={`/images/projects/${project.slug}/${image.properties.src}`}
                    alt={image.properties.alt}
                    width={600}
                    height={300}
                  />
                </div>
              );
            }

            return <p>{children}</p>;
          },
          code({ lang, children }) {
            return (
              <SyntaxHighlighter
                style={atomDark}
                language={lang}
                children={children}
              />
            );
          },
        }}
      >
        {project.content}
      </ReactMarkdown>
    </article>
  );
};
