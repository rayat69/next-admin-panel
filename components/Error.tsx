import styles from "../styles/scss/Error.module.scss";

const Login = () => {
  return (
    <header className={styles.errornote}>
      <p>
        Please enter the correct username and password for a staff account. Note
        that both fields may be case-sensitive.
      </p>
    </header>
  );
};

export default { Login };
