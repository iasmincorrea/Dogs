import React from 'react';
import Feed from './Feed/Feed';
import Head from '../Components/Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Feed" description="Rede social de cachorros" />
      <Feed />
    </section>
  );
};

export default Home;
