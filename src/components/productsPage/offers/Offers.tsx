import OffersItems from './OffersItems'
import styles from './Offers.module.css'

const Offers: React.FunctionComponent<{ title: string }> = ({ title }) => {
   const offersItemsInfo = [
      {
         itemImg: "img/offers/image1.jpg",
         itemTitle: "Всі товари",
         itemAlt: "all products",
         itemActive: true,
      },
      {
         itemImg: "img/offers/image2.jpg",
         itemTitle: "Одяг",
         itemAlt: "cloth",
         itemActive: false,
      },
      {
         itemImg: "img/offers/image3.jpg",
         itemTitle: "Техніка",
         itemAlt: "technique",
         itemActive: false,
      },
      {
         itemImg: "img/offers/image4.jpg",
         itemTitle: "Товари для дому",
         itemAlt: "products for home",
         itemActive: false,
      },
      {
         itemImg: "img/offers/image5.jpg",
         itemTitle: "Косметика",
         itemAlt: "cosmetics",
         itemActive: false,
      },
      {
         itemImg: "img/offers/image6.jpg",
         itemTitle: "Кухня",
         itemAlt: "kitchen",
         itemActive: false,
      },
      {
         itemImg: "img/offers/image7.jpg",
         itemTitle: "Інструменти",
         itemAlt: "tools",
         itemActive: false,
      },
      {
         itemImg: "img/offers/image8.jpg",
         itemTitle: "Спорт",
         itemAlt: "sport",
         itemActive: false,
      },
      {
         itemImg: "img/offers/image9.jpg",
         itemTitle: "Книги",
         itemAlt: "books",
         itemActive: false,
      }
   ];
   return (
      <section className={styles.offers}>
         <div className={styles.offers__container}>
            <h1 className={styles.offers__title}>{title}</h1>
         </div>
         <div className={styles.offers__itemsWrapper}>
            <OffersItems info={offersItemsInfo} />
         </div>
      </section>
   );
}

export default Offers;