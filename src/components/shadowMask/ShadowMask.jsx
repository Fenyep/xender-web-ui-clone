import React, { useContext } from 'react';
import MaskContext from '../../services/state/context/maskContext';

import styles from './css/shadow_mask.module.css';

const ShadowMask = () => {

  const { hideShadowMask } = useContext(MaskContext);

  return (
    <div className={styles.shadow_mask} onClick={() => hideShadowMask()}></div>
  )
}

export default ShadowMask