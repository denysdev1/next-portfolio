import Image from "next/image";
import classes from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/denys.jpg"
          alt="Photo of Denys"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Denys</h1>
      <p>This is my portfolio</p>
    </section>
  );
};
