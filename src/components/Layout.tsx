import Link from "next/link"
import styles from "../styles/base.module.scss"
import { ReactNode, useState } from "react"
import { getWindowSize } from "../functions/hooks/GetWindowSize";

type Props = {
  route?: string,
  children?: ReactNode
}

const Layout = ({route, children} : Props) =>{
  const aboutstyle = `${styles.LinksChil}` + ` ${route =="/about" ? styles.borderline : {}}`
  const worksstyle = `${styles.LinksChil}` + ` ${route =="/works" ? styles.borderline : {}}`
  const skillsstyle = `${styles.LinksChil}` + ` ${route =="/skills" ? styles.borderline : {}}`
  const blogstyle = `${styles.LinksChil}` + ` ${route =="/blog" ? styles.borderline : {}}`
  const { width } = getWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const menuFunction = () => setIsOpen(!isOpen);

  return(
    <div className={styles.base}>
      <header>
        <div className={styles.header}>
          <div className={styles.headerTitle} onClick={() => setIsOpen(false)}>
            <Link href="/">
              <a><h1>Ukai Shota</h1></a>
            </Link>
          </div>
          {width>960 ? (
            <div className={styles.headerLinks}>
              <div className={aboutstyle}>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </div>
              <div className={worksstyle}>
                <Link href="/works">
                  <a>Works</a>
                </Link>
              </div>
              <div className={skillsstyle}>
                <Link href="/skills">
                  <a>Skills</a>
                </Link>
              </div>
              {/*<div className={blogstyle}>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </div>*/}
            </div>) : (
            <div className={styles.humburger}>
              <div className={`${!isOpen ? styles.open : styles.close}`} onClick={() => menuFunction()}>
                <span></span>
                <span></span>
                <p>{isOpen ? "Close" : "Menu"}</p>
              </div>
            </div>
          )}
        </div>
      </header>{
      (isOpen&&width<=960)&&(
      <div className={`${styles.drawerMenu} ${isOpen ? styles.open : undefined}`}>
        <div className={styles.footerLinks}>
            <div className={aboutstyle} onClick={() => setIsOpen(false)}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
            <div className={worksstyle} onClick={() => setIsOpen(false)}>
              <Link href="/works">
                <a>Works</a>
              </Link>
            </div>
            <div className={skillsstyle} onClick={() => setIsOpen(false)}>
              <Link href="/skills">
                <a>Skills</a>
              </Link>
            </div>
            {/*<div className={blogstyle} onClick={() => setIsOpen(false)}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </div>*/}
        </div>
      </div>
      )}
      <div className={styles.main}>
        {children}
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
            <div className={aboutstyle}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
            <div className={worksstyle}>
              <Link href="/works">
                <a>Works</a>
              </Link>
            </div>
            <div className={skillsstyle}>
              <Link href="/skills">
                <a>Skills</a>
              </Link>
            </div>
            {/*<div className={blogstyle}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </div>*/}
        </div>
        <div className={styles.copyright}>
          <small>&copy;2022 Ukai Shota</small>
        </div>
      </footer>
    </div>
  )
}

export default Layout