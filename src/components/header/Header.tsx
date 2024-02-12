import {FC} from 'react'

import { Logo } from "./logo/Logo";
import { Menu } from './menu/Menu';
import styles from './header.module.scss'

export const Header: FC= () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <Logo />
        <Menu />
      </div>
    </header>
  )
}
 
