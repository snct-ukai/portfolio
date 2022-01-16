import Link from "next/link"
import styles from "../styles/base.module.scss"
import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

const Layout = ({children} : Props) =>{
  return(
    <div>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          Ukai Shota
        </div>
        <div className={styles.headerLinks}>
          <div className={styles.LinksChil}>
            About
          </div>
          <div className={styles.LinksChil}>
            Works
          </div>
          <div className={styles.LinksChil}>
            Skills
          </div>
        </div>
      </header>
      <div className={styles.main}>
        {children}
      </div>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Layout