import React from 'react';

import styles from './css/menu_item.module.css';

const MenuItem = ({children, backgroundColor, label}) => {

  return (
    <div className={styles.menu_item} style={{ background: backgroundColor }}>
        <div className={styles.menu_item_tooltip} style={{ background: backgroundColor }}>
          {label}
        </div>
        {children}
    </div>
  )
}

export default MenuItem