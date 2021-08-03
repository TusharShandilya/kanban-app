import Navigation from './Navigation/Navigation'
import { DarkModeToggle } from '../../UI'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <div className="">Logo here</div>
      <div className={styles.actions}>
        <DarkModeToggle />
        <span>User menu open here</span>
      </div>
    </header>
  )
}

export default Header
