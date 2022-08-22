import React from 'react'
import styles from './css/connection_warning.module.css';

const ConnectionWarning = () => {
  return (
    <div className={styles.connection_warning_container}>
            Le Mobile est déconnecté, veuillez vous reconnecter
    </div>
  )
}

export default ConnectionWarning