import Search from "../Search/Search"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <div className={styles.header}>
      <Search />
    </div>
  )
}