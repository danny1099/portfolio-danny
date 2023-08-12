import { Landing } from '~/home/components'
import styles from '~/home/styles.module.scss'

export default function Home({ t }) {
  return (
    <main className={styles.container}>
      <Landing t={t} />
    </main>
  )
}
