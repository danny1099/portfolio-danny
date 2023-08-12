import { Logo, NavItems } from '@/components'
import styles from './styles.module.scss'

export const Navbar = () => {
  return (
    <header className={styles.wrapper}>
      <Logo />
      <NavItems />
    </header>
  )
}
