import styles from "./HeaderSearch.module.css";
import headerSearchImg from "../../../imgs/header/search.svg"

export const HeaderSearch = () => {
    return (
        <form className={styles.form} action="/public">
            <input className={styles.input} placeholder="Пошук" type="text" name="search" />
            <button className={styles.button} type="submit"><img src={headerSearchImg} alt="search" /></button>
        </form>
    );
}

export default HeaderSearch;
