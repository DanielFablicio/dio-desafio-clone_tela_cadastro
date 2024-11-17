import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import styles from "./Input.module.css";

Input.propTypes = {
  leftIcon: PropTypes.any,
  name: PropTypes.string,
  control: PropTypes.object,
};

export default function Input({ leftIcon, name, control, ...rest }) {
  return (
    <div className={styles.inputContainer}>
      {leftIcon ? (
        <div className={styles.inputIconContainer}> {leftIcon} </div>
      ) : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input className={styles.inputText} {...field} {...rest} />
        )}
      />
    </div>
  );
}
