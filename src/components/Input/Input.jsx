import React, { useState } from 'react';
import styles from './Input.module.css';
function Input({ input, setInput }) {
  const generateAnchorTags = () => {
    const urls = input.trim().split('\n');
    const anchorTags = urls.map((url, index) => (
      <li key={index}>
        <a href={url}>{url}</a>
      </li>
    ));

    return anchorTags;
  };

  return (
    <>
      <label htmlFor="url" className={styles.label}>
        Input the URL links copied as text.
      </label>
      <div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste URLs here..."></textarea>

        <ul>{input && generateAnchorTags()}</ul>
      </div>
    </>
  );
}

export default Input;
