import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useParams } from "react-router";
import ProductList from "../../productList/ProductList";
import { productColorAPI } from "../../../redux/api/productColorAPI";
import styles from "./Recomendations.module.css"

const Recomendations: React.FunctionComponent = () => {
   const { defaultIndex } = useParams();

   const { data: productColors } = productColorAPI.useFetchAllQuery({});

   return (
      <div className={styles.recomendations}>
         <div className="recomendations__containerMax">
            <h2 className={styles.recomendations__title}>Рекомендація</h2>
            <div className={styles.recomendations__body}>
               <Tabs defaultIndex={defaultIndex ? parseInt(defaultIndex) : 0} className={styles.ordersBodyTabs}>
                  <TabList className={styles.ordersBodyTabList}>
                     <Tab className={styles.ordersBodyTab} selectedClassName={styles._active}>
                        <button>Для жінок</button>
                     </Tab>
                     <Tab className={styles.ordersBodyTab} selectedClassName={styles._active}>
                        <button>Для чоловіків</button>
                     </Tab>
                  </TabList>
                  <TabPanel>
                     {productColors && <ProductList productColors={productColors} />}
                  </TabPanel>
                  <TabPanel>
                     hdh
                     {productColors && <ProductList productColors={productColors} />}
                  </TabPanel>
               </Tabs>
            </div>
         </div>
      </div>
   );
}

export default Recomendations;