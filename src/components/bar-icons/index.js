import { useEffect, useState } from 'react'
import { Divider } from 'antd'
import { Icon, ToggleLang, ToggleTheme } from '@/components'
import styles from './styles.module.scss'

export const BarIcons = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <ToggleTheme />
      <ToggleLang />
      <Divider style={{ margin: '5px 0' }} />
      <Icon name="github" size="18px" />
    </div>
  )
}
