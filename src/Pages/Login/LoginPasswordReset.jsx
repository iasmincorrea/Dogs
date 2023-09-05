import React from 'react';

import Input from '../../Components/Form/Input/Input';
import Button from '../../Components/Form/Button/Button';
import Error from '../../Components/Helper/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../api';
import { useNavigate } from 'react-router-dom';
import Head from '../../Components/Helper/Head';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');

  const password = useForm();
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);
      if (response.ok) navigate('/entrar');
    }
  }

  return (
    <section className="animeLeft">
      <Head
        title="Resetar Senha"
        description="Redefina com sucesso sua senha na nossa comunidade de amantes de cachorros. Siga as etapas para criar uma nova senha segura e volte a fazer parte da nossa rede social dedicada aos nossos amigos de quatro patas."
      />

      <h1 className="title">Resetar Senha</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
