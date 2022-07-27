import React from 'react'
import styles from"./styles.module.css";


function A() {
  return (
    <div className={styles.title}>A</div> // b ile aynı class name kullanmamalısın kullanırsan uniq id olarak kullanman gerekir
  ) //module yapısı devreye girmeli bu durumda
}

export default A