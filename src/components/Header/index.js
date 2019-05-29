import React from 'react'

import Link from 'next/link'

import styles from './style.less'

function Header (props) {
  return (
    <div className={styles.head}>
      <div className='container' style={{position: 'relative'}}>
        <span className={styles.logo}>logo</span>
        <span className={styles.title}>A react + redux + webpack + babel stacks</span>
        <nav className={styles.nav}>
          <Link href='/'><a>Home</a></Link>
          <Link href='/second'><a>Second</a></Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
