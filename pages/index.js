import Head from 'next/head'
import Image from 'next/image'
import UseRefExample1 from '../components/UseRefExample1'
import UseRefExample2 from '../components/UseRefExample2'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <p>React Hook Form </p>
      <UseRefExample1></UseRefExample1>
    </div>
  )
}
