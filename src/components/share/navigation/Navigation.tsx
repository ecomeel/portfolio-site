import {FC } from 'react'

import styles from './navigation.module.scss'

export const Navigation: FC = () => {
    return (
        <ul className={styles.menu}>
            <li>
                <a href="#portfolio">портфолио</a>
            </li>
            <li>
                <a href="#compet">компетенции</a>
            </li>
            <li>
                <a href="#services">услуги</a>
            </li>
            <li>
                <a href="#feedback">контакты</a>
            </li>
        </ul>
    );
};
