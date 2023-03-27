import styles from './page.module.scss';

export const PageWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className={styles.page}>
    {children}
  </div>
);
