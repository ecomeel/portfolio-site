import { FC } from "react";
import styles from './button.module.scss'

interface IButton {
  title: string;
  classList: string;
}

export const Button: FC<IButton> = ({title, classList}) => {
  return (
    <button className={`${classList} ${styles.button}`}>{title}</button>
  )
}