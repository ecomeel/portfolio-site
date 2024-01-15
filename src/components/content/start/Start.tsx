import styles from './start.module.scss'

export const Start = () => {
    return (
        <section className={styles.wrapper}>
            <div className='container'>
                <div className={styles.text}>
                  <p className={styles.description}>
                      Разрабатываю имиджевые сайты для малого и среднего бизнеса,
                      которые повышают престиж компании и позволяют выделиться на
                      фоне конкурентов
                  </p>
                  <h1 className={styles.title}>
                      Привет, я Саша — фронтенд разработчик
                  </h1>
                </div>
            </div>
        </section>
    );
};
