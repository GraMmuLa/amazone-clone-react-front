import styles from "./CustomerService.module.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FAQRecomendations from "./FAQ/FAQRecomendations"
import FAQOrders from "./FAQ/FAQOrders"
import FAQPaymentDilevery from "./FAQ/FAQPaymentDilevery"
import FAQReturnGoods from "./FAQ/FAQReturnGoods"
import FAQYourAccount from "./FAQ/FAQYourAccount"
import FAQAboutUs from "./FAQ/FAQAboutUs"
import qIcon from "../../imgs/customerService/qIcon.svg"
import search from "../../imgs/orders/search.svg"

const CustomerService: React.FunctionComponent = () => {

   const questions = ["Як замовляти", "Доставка", "Оплата", "Повернення товару", "Про нас", "Політика конфіденційності"];

   const FAQRecomendationsArr = [
      {
         title: "Як знайти відсутню посилку, яка відобраfoiej fe fe feefefefeef",
         text: "Більшість посилок приходить вчасно, але інколи на відстеженнях може відображатися «доставлено», а посилки немає.",
      },
      {
         title: "Затримка доставки",
         text: "Більшість посилок приходить вчасно. Іноді замовлення з’являються після орієнтовної дати доставки.",
      },
      {
         title: "Відстеження відправлення",
         text: "Інформацію про відстеження можна знайти в деталях замовлення. Якщо замовлення включає кілька товарів, кожен може мати окремі дати дшощао щш оащш ошощ о аогшоаугощш",
      },
      {
         title: "Як знайти відсутню посилку, яка відобраfoiej fe fe feefefefeef",
         text: "Більшість посилок приходить вчасно, але інколи на відстеженнях може відображатися «доставлено», а посилки немає.",
      },
      {
         title: "Затримка доставки",
         text: "Більшість посилок приходить вчасно. Іноді замовлення з’являються після орієнтовної дати доставки.",
      },
      {
         title: "Відстеження відправлення",
         text: "Інформацію про відстеження можна знайти в деталях замовлення. Якщо замовлення включає кілька товарів, кожен може мати окремі дати дшощао щш оащш ошощ о аогшоаугощш",
      },
   ]
   const FAQOrdersArr = [
      {
         title: "Як знайти відсутню посилку, яка відобраfoiej fe fe feefefefeef",
         text: "Більшість посилок приходить вчасно, але інколи на відстеженнях може відображатися «доставлено», а посилки немає.",
      },
      {
         title: "Як знайти відсутню посилку, яка відобраfoiej fe fe feefefefeef",
         text: "Більшість посилок приходить вчасно, але інколи на відстеженнях може відображатися «доставлено», а посилки немає.",
      },
      {
         title: "Затримка доставки",
         text: "Більшість посилок приходить вчасно. Іноді замовлення з’являються після орієнтовної дати доставки.",
      },
      {
         title: "Відстеження відправлення",
         text: "Інформацію про відстеження можна знайти в деталях замовлення. Якщо замовлення включає кілька товарів, кожен може мати окремі дати дшощао щш оащш ошощ о аогшоаугощш",
      },
      {
         title: "Як знайти відсутню посилку, яка відобраfoiej fe fe feefefefeef",
         text: "Більшість посилок приходить вчасно, але інколи на відстеженнях може відображатися «доставлено», а посилки немає.",
      },
      {
         title: "Затримка доставки",
         text: "Більшість посилок приходить вчасно. Іноді замовлення з’являються після орієнтовної дати доставки.",
      },
   ]
   const FAQPaymentDileveryArr = [
      {
         title: "Як знайти відсутню посилку, яка відобраfoiej fe fe feefefefeef",
         text: "Більшість посилок приходить вчасно, але інколи на відстеженнях може відображатися «доставлено», а посилки немає.",
      },
      {
         title: "Як знайти відсутню посилку, яка відобраfoiej fe fe feefefefeef",
         text: "Більшість посилок приходить вчасно, але інколи на відстеженнях може відображатися «доставлено», а посилки немає.",
      },
      {
         title: "Затримка доставки",
         text: "Більшість посилок приходить вчасно. Іноді замовлення з’являються після орієнтовної дати доставки.",
      },
      {
         title: "Відстеження відправлення",
         text: "Інформацію про відстеження можна знайти в деталях замовлення. Якщо замовлення включає кілька товарів, кожен може мати окремі дати дшощао щш оащш ошощ о аогшоаугощш",
      },
      {
         title: "Як знайти відсутню посилку, яка відобраfoiej fe fe feefefefeef",
         text: "Більшість посилок приходить вчасно, але інколи на відстеженнях може відображатися «доставлено», а посилки немає.",
      },
   ]
   const FAQReturnGoodsArr = [
      {
         title: "Як знайти відсутню посилку, яка відобраfoiej fe fe feefefefeef",
         text: "Більшість посилок приходить вчасно, але інколи на відстеженнях може відображатися «доставлено», а посилки немає.",
      },
      {
         title: "Як знайти відсутню посилку, яка відобраfoiej fe fe feefefefeef",
         text: "Більшість посилок приходить вчасно, але інколи на відстеженнях може відображатися «доставлено», а посилки немає.",
      },
      {
         title: "Затримка доставки",
         text: "Більшість посилок приходить вчасно. Іноді замовлення з’являються після орієнтовної дати доставки.",
      },
      {
         title: "Затримка доставки",
         text: "Більшість посилок приходить вчасно. Іноді замовлення з’являються після орієнтовної дати доставки.",
      },
   ]
   const FAQYourAccountArr = [
      {
         title: "Як знайти відсутню посилку, яка відобраfoiej fe fe feefefefeef",
         text: "Більшість посилок приходить вчасно, але інколи на відстеженнях може відображатися «доставлено», а посилки немає.",
      },
      {
         title: "Затримка доставки",
         text: "Більшість посилок приходить вчасно. Іноді замовлення з’являються після орієнтовної дати доставки.",
      },
      {
         title: "Відстеження відправлення",
         text: "Інформацію про відстеження можна знайти в деталях замовлення. Якщо замовлення включає кілька товарів, кожен може мати окремі дати дшощао щш оащш ошощ о аогшоаугощш",
      },
      {
         title: "Як знайти відсутню посилку, яка відобраfoiej fe fe feefefefeef",
         text: "Більшість посилок приходить вчасно, але інколи на відстеженнях може відображатися «доставлено», а посилки немає.",
      },
      {
         title: "Затримка доставки",
         text: "Більшість посилок приходить вчасно. Іноді замовлення з’являються після орієнтовної дати доставки.",
      },
   ]
   const FAQAboutUsArr = [
      {
         title: "Затримка доставки",
         text: "Більшість посилок приходить вчасно. Іноді замовлення з’являються після орієнтовної дати доставки.",
      },
      {
         title: "Відстеження відправлення",
         text: "Інформацію про відстеження можна знайти в деталях замовлення. Якщо замовлення включає кілька товарів, кожен може мати окремі дати дшощао щш оащш ошощ о аогшоаугощш",
      },
      {
         title: "Як знайти відсутню посилку, яка відобраfoiej fe fe feefefefeef",
         text: "Більшість посилок приходить вчасно, але інколи на відстеженнях може відображатися «доставлено», а посилки немає.",
      },
      {
         title: "Затримка доставки",
         text: "Більшість посилок приходить вчасно. Іноді замовлення з’являються після орієнтовної дати доставки.",
      },
   ]

   return (
      <main className={styles.customerService}>
         <div className={styles.customerService__container}>
            <h1 className={styles.customerService__title}>Обслуговування клієнтів</h1>
            <div className={styles.customerService__body}>
               <div className={`${styles.customerService__questions} ${styles.questionsService}`}>
                  <h2 className={styles.questionsService__title}>Найчастіші запитання</h2>
                  <div className={styles.questionsService__items}>
                     {questions.map(question => <a href="" className={styles.questionsService__item}><img src={qIcon} alt="qIocn" /> {question}</a>)}
                  </div>
               </div>
               <div className={`${styles.customerService__FAQ} ${styles.FAQService}`}>
                  <h2 className={styles.FAQService__title}>Якщо не знайшли відповідь на ваше питання то скористайтеся пошуком</h2>
                  <form className={styles.FAQService__form} action="">
                     <input placeholder="Пошук запитання" type="text" />
                     <button type="submit"><img src={search} alt="search button" /></button>
                  </form>
                  <Tabs className={styles.FAQService__tabs}>
                     <TabList className={styles.FAQService__tabList}>
                        <Tab className={styles.FAQService__tab} selectedClassName={styles._active}>
                           <button>Рекомендовані теми</button>
                        </Tab>
                        <Tab className={styles.FAQService__tab} selectedClassName={styles._active}>
                           <button>Де моє замовлення?</button>
                        </Tab>
                        <Tab className={styles.FAQService__tab} selectedClassName={styles._active}>
                           <button>Доставка і оплата</button>
                        </Tab>
                        <Tab className={styles.FAQService__tab} selectedClassName={styles._active}>
                           <button>Повернення товару</button>
                        </Tab>
                        <Tab className={styles.FAQService__tab} selectedClassName={styles._active}>
                           <button>Ваш аккаунт</button>
                        </Tab>
                        <Tab className={styles.FAQService__tab} selectedClassName={styles._active}>
                           <button>Про нас</button>
                        </Tab>
                     </TabList>
                     <div>
                        <TabPanel>
                           <FAQRecomendations FAQRecomendationsArr={FAQRecomendationsArr} />
                        </TabPanel>
                        <TabPanel>
                           <FAQOrders FAQOrdersArr={FAQOrdersArr} />
                        </TabPanel>
                        <TabPanel>
                           <FAQPaymentDilevery FAQPaymentDileveryArr={FAQPaymentDileveryArr} />
                        </TabPanel>
                        <TabPanel>
                           <FAQReturnGoods FAQReturnGoodsArr={FAQReturnGoodsArr} />
                        </TabPanel>
                        <TabPanel>
                           <FAQYourAccount FAQYourAccountArr={FAQYourAccountArr} />
                        </TabPanel>
                        <TabPanel>
                           <FAQAboutUs FAQAboutUsArr={FAQAboutUsArr} />
                        </TabPanel>
                     </div>
                  </Tabs>
               </div>
            </div>
         </div>
      </main >
   );
}

export default CustomerService;
