import Link from 'next/link'
import UseRefExample1 from "../components/UseRefExample1";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
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
      </div>
      <p>React Hook Form </p>
      <UseRefExample1></UseRefExample1>
    </div>
  );
}
