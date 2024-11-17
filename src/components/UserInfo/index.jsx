import styles from "./UserInfo.module.css";
import PropTypes from "prop-types";

UserInfo.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  widthPercentual: PropTypes.number,
};

export default function UserInfo({ name, image, widthPercentual }) {
  return (
    <div className={styles.userInfoContainer}>
      <img src={image} className={styles.userPicture} />
      <div>
        <div className={styles.userInfoNameText}>{name}</div>
        <div
          className={styles.userInfoProgress}
          style={{ "--width-percentual": `${widthPercentual}%` }}
        />
      </div>
    </div>
  );
}
