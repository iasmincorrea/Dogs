import React from 'react';

const NotFound = () => {
  var pathSegmentsToKeep = 1;

  var l = window.location;
  l.replace(
    l.protocol +
      '//' +
      l.hostname +
      (l.port ? ':' + l.port : '') +
      l.pathname
        .split('/')
        .slice(0, 1 + pathSegmentsToKeep)
        .join('/') +
      '/?/' +
      l.pathname
        .slice(1)
        .split('/')
        .slice(pathSegmentsToKeep)
        .join('/')
        .replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash,
  );

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
