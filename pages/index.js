import { Link } from '@chakra-ui/react'
import UseRefExample1 from '../components/UseRefExample1'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/rhfexample1">Example 1</Link>
      </div>
      <p>React Hook Form </p>
      <UseRefExample1></UseRefExample1>
    </div>
  )
}
