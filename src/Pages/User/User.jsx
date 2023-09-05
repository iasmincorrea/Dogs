import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { UserContext } from '../../UserContext';
import NotFound from '../../Components/NotFound';
import Head from '../../Components/Helper/Head';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head
        title="Minha Conta"
        description="Gerencie suas atividades na nossa rede social para cachorros. Visualize suas fotos, monitore estatísticas de acessos e compartilhe momentos especiais com outros apaixonados por cães."
      />

      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
