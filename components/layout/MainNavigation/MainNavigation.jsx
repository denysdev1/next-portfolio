import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { Logo } from "../Logo/Logo";

export const MainNavigation = () => (
  <header className={classes.header}>
    <Link href="/">
      <Logo />
    </Link>
    <nav>
      <ul>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);
