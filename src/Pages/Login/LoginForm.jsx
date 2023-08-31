import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LoginForm.module.css';
import stylesBtn from '../../Components/Form/Button/Button.module.css';

import Input from '../../Components/Form/Input/Input';
import Button from '../../Components/Form/Button/Button';
import Error from '../../Components/Helper/Error';
import Head from '../../Components/Helper/Head';

import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />

      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos.'} />
      </form>

      <Link className={styles.forgot} to="/login/perdeu">
        Perdeu a Senha?
      </Link>

      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p className={styles.registerText}>
          Ainda não possui conta? Cadastre-se no site
        </p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
