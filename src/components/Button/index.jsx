import styles from "./Button.module.css";
import PropTypes from "prop-types";

Button.propTypes = {
  secondary: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default function Button({ title, secondary = false, onClick }) {
  return (
    <button
      className={
        secondary
          ? styles.buttonContainerSecondary
          : styles.buttonContainerPrimary
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
}
