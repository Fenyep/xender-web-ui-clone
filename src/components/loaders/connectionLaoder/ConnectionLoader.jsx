import React from 'react';
import ConnectionLoaderImg from '../../../assets/images/connection_loader.png';
import styles from './css/connection_loader.module.css';

const ConnectionLoader = () => {
  return (
    <div className={styles.connection_loader_div}>
      <img className={styles.connection_loader_img} src={ConnectionLoaderImg} alt="connection loader" />
    </div>
  )
}

export default ConnectionLoader