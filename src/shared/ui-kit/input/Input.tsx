import styles from './input.module.scss';

export const Input = ({ label, name, value, onChange, placeholder }: any) => {
  return (
    <div>
      {label && <label className={styles.inputLabel} htmlFor={name}>{label}</label>}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};
