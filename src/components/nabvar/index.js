import { Logo, NavItems, BarIcons } from '@/components'
import styles from './styles.module.scss'
import { useLocales } from '@/hooks'

export const Navbar = () => {
  return (
    <>
      <header className={styles.wrapper}>
        <Logo />
        <NavItems />
      </header>

      {/* bar icons static on all pages */}
      <BarIcons />
    </>
  )
}
