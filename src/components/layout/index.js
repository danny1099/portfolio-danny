import { Navbar } from '@/components'
import { fontPoppins } from '@/fonts'
import styles from './styles.module.scss'

export const RootLayout = ({ children }) => {
  return (
    <div className={`${styles.container} ${fontPoppins.className}`}>
      <Navbar />
      {children}
    </div>
  )
}
