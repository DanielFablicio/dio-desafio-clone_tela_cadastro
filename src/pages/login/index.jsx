import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";

export default function Login() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `/users?email=${formData.email}&senha=${formData.senha}`,
      );

      if (data.length && data[0].id) {
        navigate("/feed");
        return;
      }

      alert("Usuário ou senha inválido");
    } catch (e) {
      console.log("error", e);
    }
  };

  console.log("errors", errors);

  return (
    <>
      <Header />
      <main className={styles.loginContainer}>
        <div className={styles.loginColumn}>
          <h2 className={styles.loginTitle}>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </h2>
        </div>
        <div className={styles.loginColumn}>
          <div className={styles.loginWrapper}>
            <p className={styles.loginLoginTitle}>Faça seu cadastro</p>
            <p className={styles.loginSubtitle}>
              Faça seu login e make the change._
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Senha é obrigatório</span>}
              <Button title="Entrar" secondary={true} type="submit" />
            </form>
            <div className={styles.loginRow}>
              <p className={styles.loginForgotText}>Esqueci minha senha</p>
              <p className={styles.loginCreateText}>Criar Conta</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
