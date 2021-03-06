import Header from './Header/Header'
import styles from './layout.module.scss'

export const Layout = ({ children }) => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
