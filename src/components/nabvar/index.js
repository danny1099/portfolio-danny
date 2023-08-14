import { Logo, Contact, NavItems, BarIcons } from '@/components'
import styles from './styles.module.scss'

export const Navbar = () => {
  return (
    <>
      <header className={styles.wrapper}>
        <Logo />
        <Contact />
        <NavItems />
      </header>

      {/* bar icons static on all pages */}
      <BarIcons />
    </>
  )
}
