import classes from "./ProjectItem.module.css";
import Link from "next/link";
import Image from "next/image";

export const ProjectItem = ({ project }) => {
  const { title, date, shortDescription, image, slug } = project;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/projects/${slug}/${image}`;
  const linkPath = `/projects/${slug}`;

  return (
    <li className={classes.project}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{shortDescription}</p>
        </div>
      </Link>
    </li>
  );
};
