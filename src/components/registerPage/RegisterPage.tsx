import Header from "../header/Header";
import Footer from "../footer/Footer";
import RegisterBody from "./registerBody/RegisterBody";
import RegisterBonuses from "./registerBonuses/RegisterBonuses";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
   return (
      <>
         <Header />
         <main className={styles.registerPage}>
            <div className="registerPageTitle__container">
               <h3 className={styles.registerPage__title}>Станьте продавцем та почніть продавати</h3>
            </div>
            <RegisterBody />
            <RegisterBonuses />
         </main>
         <Footer />
      </>
   );
}

export default RegisterPage;