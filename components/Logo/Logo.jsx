import Link from "next/link.js";
import styles from "./Logo.module.css"

export default function Logo (props) {
  const {boxOn=false} = props;
  return (
    <Link className={boxOn ? styles.box : styles.basic} href="/">
      CUBE
    </Link>
  )
 }