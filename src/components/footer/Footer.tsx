import React from "react";
import FooterColumn from "./FooterColumn";
import styles from "./Footer.module.css";

const Footer: React.FunctionComponent = () => {
    const footerMenuItems = [
        {
            label: "Знайомтеся з нами",
            links: [
                "Кар'єра",
                "Блог",
                "Про сайт",
                "Відносини з інвесторами",
                "Пристрої сайта",
                "Science сайта"
            ]
        },
        {
            label: "Заробляйте з нами",
            links: [
                "Продавайте товари на сайте",
                "Продавати на сайте Бизнес",
                "Продавайте програми на сайте",
                "Станьте партнером",
                "Рекламуйте свою продукцію",
                "Самостійна публікація з нами",
                "Розмістіть сайте Hub",
                "› Див. більше. Заробіть з нами"
            ]
        },
        {
            label: "Платіжні продукти сайта",
            links: [
                "Візитна картка сайта",
                "Купуйте з балами",
                "Поповніть свій баланс",
                "Конвертер валют сайта"
            ]
        },
        {
            label: "Дозвольте нам допомогти",
            links: [
                "Amazon и COVID-19",
                "Ваш рахунок",
                "Ваші замовлення",
                "Тарифи та правила доставки",
                "Повернення та заміна",
                "Керуйте своїм вмістом і пристроями",
                "Помічник Amazon",
                "Довідка"
            ]
        }
    ];
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__body}>
                    {footerMenuItems.map(footerMenuItem => <FooterColumn label={footerMenuItem.label} links={footerMenuItem.links} />)}
                </div>
                <div className={styles.footer__bottom}>
                    <div className={styles.footer__links}>
                        <a href="" className={styles.footer__link}>Умови використання</a>
                        <a href="" className={styles.footer__link}>Повідомлення про конфіденційність</a>
                        <a href="" className={styles.footer__link}>Вибір конфіденційності ваших оголошень</a>
                    </div>
                    <div className={styles.footer__copy}>
                        <div className={styles.footer__copyItem}>© 1996-2024,</div>
                        <div className={styles.footer__copyItem}>Amazon.com</div>
                        <div className={styles.footer__copyItem}>Inc. або її філії</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;