import styles from "./ProductInfoBottom.module.css";

const ProductInfoBottom = () => {
   return (
      <div className={styles.productInfoBottom}>
         <h2 className={styles.productInfoBottom__title}>Про цей предмет</h2>
         <ul>
            <li>Чоловіча футболка, повсякденна літня, великих розмірів, з заниженими плечима.</li>
            <li>Футболка для повсякденного життя, вдома, на природі, на вулиці, будь-якому іншому випадку в літні дні.</li>
            <li>Розмір: S-5XL, різні кольори для різноманітного вибору.</li>
         </ul>
      </div>
   );
}

export default ProductInfoBottom;