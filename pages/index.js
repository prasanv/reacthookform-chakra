import { Box } from "@chakra-ui/react";
import Link from "next/link";
import UseRefExample1 from "../components/UseRefExample1";
import UseRefExample2 from "../components/UseRefExample2";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/rhfExample1">Example 1</Link>
          </li>
          <li>
            <Link href="/rhfExample2">Example 2</Link>
          </li>
          <li>
            <Link href="/rhfExample3">Example 3</Link>
          </li>
          <li>
            <Link href="/rhfExample4">Example 4</Link>
          </li>
        </ul>
      </nav>
      <p>React Hook Form </p>
      <UseRefExample1></UseRefExample1>
      <UseRefExample2></UseRefExample2>
    </Box>
  );
}
