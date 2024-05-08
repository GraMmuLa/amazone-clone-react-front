import styles from "./FooterColumn.module.css";
import React from "react";


const FooterColumn: React.FunctionComponent<{ links: string[], label: string }> = ({ links, label }) => {
   return (
      <div className={styles.footer__column}>
         <div className={styles.footer__label}>{label}</div>
         <nav className={styles.footer__menuBod}>
            <ul className="footer__menuList">
               {links.map((link: string) => <li className={styles.footer__menuItem}><a href="" className="footer__menuLink">{link}</a></li>)}
            </ul>
         </nav>
      </div>

   );
}

export default FooterColumn;