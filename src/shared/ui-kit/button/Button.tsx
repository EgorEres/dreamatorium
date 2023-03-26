import styles from './button.module.scss'

type ButtonPropsType = {
  name?: string;
  onClick?: () => void;
}

export const Button = (props: ButtonPropsType) => {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
    >{props.name || 'Click'}</button>
  )
}