import React from 'react';
import Feed from './Feed/Feed';
import Head from '../Components/Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Feed"
        description="Explore a maior comunidade online para amantes de cachorros! Compartilhe fotos e momentos inesquecíveis com nossos amigos de quatro patas. Junte-se à diversão hoje e faça parte da rede social canina número um."
      />
      <Feed />
    </section>
  );
};

export default Home;
