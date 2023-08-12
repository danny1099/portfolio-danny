import Link from 'next/link'
import styles from './styles.module.scss'

export const GotoMyWork = ({ text, href }) => {
  return (
    <Link href={href} className={styles.wrapper}>
      {text}
    </Link>
  )
}
