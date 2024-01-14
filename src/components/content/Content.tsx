import styles from './content.module.scss'
import { Start } from './start/Start'

export const Content = () => {
  return (
    <main className={styles.content}>
      <Start />
    </main>
  )
}