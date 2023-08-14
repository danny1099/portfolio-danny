import { Icon, ToggleLang, ToggleTheme } from '@/components'
import styles from './styles.module.scss'

export const BarIcons = () => {
  return (
    <div className={styles.wrapper}>
      <ToggleTheme />
      <ToggleLang />
      <Icon name="github" size="18px" />
    </div>
  )
}
