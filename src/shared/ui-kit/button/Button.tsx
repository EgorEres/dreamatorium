import styles from './button.module.scss';

type ButtonPropsType = {
  name?: string;
  onClick?: () => void;
};

export const Button = ({ onClick, name }: ButtonPropsType) => (
  <button
    type="button"
    className={styles.button}
    onClick={onClick}
  >
    {name || 'Click'}
  </button>
);
