import styles from './styles.module.css'

export function Icon({ name, size = '16px' }) {
  return (
    <div className={styles.wrapper}>
      <svg className="bi" height={size} width={size}>
        <use xlinkHref={`/images/icons_sprite.svg#${name}`} />
      </svg>
    </div>
  )
}
