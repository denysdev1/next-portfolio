import classes from "./ProjectHeader.module.css";
import Image from "next/image";

export const ProjectHeader = ({ title, image }) => (
  <header className={classes.header}>
    <h1>{title}</h1>
    <Image src={image} alt={title} width={200} height={150} />
  </header>
);
