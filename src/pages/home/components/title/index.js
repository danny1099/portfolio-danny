import { fontMonserrat } from '@/fonts'
import styles from './styles.module.scss'

export const Title = ({ text }) => {
  return (
    <h1 className={`${styles.title} ${fontMonserrat.className}`}>{text}</h1>
  )
}
