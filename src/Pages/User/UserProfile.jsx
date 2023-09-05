import React from 'react';
import { useParams } from 'react-router-dom';

import Feed from '../Feed/Feed';
import Head from '../../Components/Helper/Head';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      <Head
        title={user}
        description="Explore o perfil de um membro da nossa comunidade de amantes de cachorros. Descubra fotos incríveis, acompanhe aventuras caninas e compartilhe sua paixão por cães."
      />

      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
