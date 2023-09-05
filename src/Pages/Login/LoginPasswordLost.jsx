import React from 'react';

import Input from '../../Components/Form/Input/Input';
import Button from '../../Components/Form/Button/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../../Components/Helper/Error';
import Head from '../../Components/Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });

      request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head
        title="Esqueceu a Senha"
        description="Recupere o acesso à sua conta na nossa comunidade de amantes de cachorros. Siga as instruções para redefinir sua senha e retorne às aventuras caninas em nossa rede social. Nunca perca os momentos especiais com nossos amigos de quatro patas."
      />

      <h1 className="title">Esqueceu a Senha?</h1>

      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label="E-mail ou Usuário"
            type="text"
            name="login"
            placeholder="Insira seu e-mail ou nome de usuário"
            {...login}
          />

          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar E-mail</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
