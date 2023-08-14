import { useLocales } from '@/hooks'
import styles from './styles.module.scss'

export const Contact = () => {
  const text = useLocales({ search: 'contact', key: 'components' })

  return (
    <div className={styles.wrapper}>
      <h3>{text}</h3>
      <p>dale.softdev@gmail.com</p>
    </div>
  )
}
