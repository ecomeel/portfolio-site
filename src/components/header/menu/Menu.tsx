import { FC } from "react";

import { Navigation } from "../../navigation/Navigation";
import styles from './menu.module.scss'

export const Menu: FC = () => {
    return (
        <nav className={styles.menu}>
            <Navigation />
        </nav>
    );
};
