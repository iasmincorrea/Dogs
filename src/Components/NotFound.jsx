import React from 'react';

const NotFound = () => {
  return (
    <div className="container mainContainer" style={{ textAlign: 'center' }}>
      <h1
        className="title"
        style={{ maxWidth: 'fit-content', margin: '1rem auto' }}
      >
        Erro: 404
      </h1>
      <p style={{ fontSize: '18px', color: '#333' }}>Página não encontrada</p>
    </div>
  );
};

export default NotFound;
