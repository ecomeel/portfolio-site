import { FC } from "react";

import { Social } from "./social/Social";
import styles from './socials.module.scss'

export const Socials: FC = () => {
  return (
    <ul className={styles.socials}>
      <Social 
        title='instagram'
        link="https://instagram.com/ecomiil?igshid=YmMyMTA2M2Y="
      />
      <Social 
        title='telegram'
        link="https://t.me/AleksPulin"
      />
      <Social 
        title='mail'
        link="mailto:ecomeel@icloud.com"
      />
    </ul>
  );
};
