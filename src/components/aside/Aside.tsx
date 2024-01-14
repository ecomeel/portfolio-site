import { FC } from "react";

import { Navigation } from "../share/navigation/Navigation";
import styles from './aside.module.scss'

export const Aside: FC = () => {
  return (
    <aside className={styles.menu}>
      <Navigation />
    </aside>
  )
}
