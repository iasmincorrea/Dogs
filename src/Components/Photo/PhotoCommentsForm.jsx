import React from 'react';

import styles from './PhotoCommentsForm.module.css';

import { COMMENT_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';

import { ReactComponent as Send } from '../../Assets/send.svg';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const token = window.localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Send />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
