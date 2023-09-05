import React from 'react';
import Input from '../../Components/Form/Input/Input';
import Button from '../../Components/Form/Button/Button';
import Error from '../../Components/Helper/Error';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Head from '../../Components/Helper/Head';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head
        title="Criar Conta"
        description="Junte-se à nossa comunidade de amantes de cachorros hoje mesmo! Crie sua conta, compartilhe fotos e momentos inesquecíveis com outros apaixonados por cães. Comece a fazer parte da rede social canina número um."
      />

      <h1 className="title">Criar Conta</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome de usuário"
          type="text"
          name="username"
          placeholder="Insira seu nome de usuário"
          {...username}
        />
        <Input
          label="E-mail"
          type="text"
          name="email"
          placeholder="Insira seu e-mail"
          {...email}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          placeholder="Crie uma senha"
          {...password}
        />

        {loading ? (
          <Button disabled>Criando Conta...</Button>
        ) : (
          <Button>Criar Conta</Button>
        )}

        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
