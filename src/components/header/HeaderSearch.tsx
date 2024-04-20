import styles from "./HeaderSearch.module.css";

export const HeaderSearch = () => {
    return (
        <form className={styles.form} action="/">
            <input className={styles.input} placeholder="Пошук" type="text" name="search" />
            <button className={styles.button} type="submit"><img src="img/header/search.svg" alt="search" /></button>
        </form>
    );
}

export default HeaderSearch;
