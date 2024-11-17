import styles from "./feed.module.css";

import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";
import Header from "../../components/Header";

export default function Feed() {
  return (
    <>
      <Header autenticado={true} />
      <main className={styles.feedContainer}>
        <div className={styles.feedColumn} style={{ "--flex-factor": "3" }}>
          <h3 className={styles.feedTitle}>Feed</h3>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className={styles.feedColumn} style={{ "--flex-factor": "1" }}>
          <h3 className={styles.feedTitleHighlight}>
            # RANKING 5 TOP DA SEMANA
          </h3>
          <UserInfo
            name="Daniel Fablício"
            image="https://avatars.githubusercontent.com/u/168105086?v=4"
            widthPercentual={25}
          />
          <UserInfo
            name="Daniel Fablício"
            image="https://avatars.githubusercontent.com/u/168105086?v=4"
            widthPercentual={65}
          />
          <UserInfo
            name="Daniel Fablício"
            image="https://avatars.githubusercontent.com/u/168105086?v=4"
            widthPercentual={45}
          />
          <UserInfo
            name="Daniel Fablício"
            image="https://avatars.githubusercontent.com/u/168105086?v=4"
            widthPercentual={72}
          />
        </div>
      </main>
    </>
  );
}
