import React from 'react';

import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import { UserContext } from '../../UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

const PhtooContent = ({ data, single }) => {
  const { photo, comments } = data;
  const user = React.useContext(UserContext);

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link
                className={styles.authorHref}
                to={`/perfil/${photo.author}`}
              >
                @{photo.author}
              </Link>
            )}
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li className={styles.attributesItem}>{photo.peso} kg</li>
            <li className={styles.attributesItem}>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  );
};

export default PhtooContent;
