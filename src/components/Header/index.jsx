import Button from "../Button";
import styles from "./Header.module.css";
import dio_logo from "../../assets/logo-dio.png";
import PropTypes from "prop-types";

Header.propTypes = {
  autenticado: PropTypes.bool,
};

export default function Header({ autenticado }) {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.headerRow}>
          <img src={dio_logo} alt="Logo da DIO" />
          {autenticado ? (
            <>
              <div className={styles.SearchInputContainer}>
                <input className={styles.headerInput} placeholder="Buscar..." />
              </div>
              <a className={styles.headerMenu}> Live Code </a>
              <a className={styles.headerMenu}> Global </a>
            </>
          ) : null}
        </div>
        <div className={styles.headerRow}>
          {autenticado ? (
            <img
              className={styles.headerUserPicture}
              src="https://avatars.githubusercontent.com/u/168105086?v=4"
            />
          ) : (
            <>
              <a className={styles.headerMenuRight}>Home</a>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
