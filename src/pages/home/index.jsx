import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import bannerImage from "../../assets/banner.png";

import Button from "../../components/Button";
import Header from "../../components/Header";

export default function Home() {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <main className={styles.homeContainer}>
        <div>
          <h2 className={styles.homeTitle}>
            <span className={styles.homeTitleHighlight}>
              Implemente <br />
            </span>
            o seu futuro global agora!
          </h2>
          <p className={styles.homeTextContent}>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </p>

          <Button
            title="Começar agora"
            secondary={true}
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={bannerImage} alt="Imagem principal do site." />
        </div>
      </main>
    </>
  );
}
