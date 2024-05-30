import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useParams } from "react-router";
import ProductList from "../../productList/ProductList";
import { productColorAPI } from "../../../redux/api/productColorAPI";
import styles from "./Recomendations.module.css"
import React from "react";

const Recommendations: React.FunctionComponent = () => {
   const { data: productColorsWomens } = productColorAPI.useFetchAllBySubcategoryNameQuery("Жіночий одяг");
   const { data: productColorsMens } = productColorAPI.useFetchAllBySubcategoryNameQuery("Чоловічий одяг");

   return (
      <div className={styles.recomendations}>
         <div className="recomendations__containerMax">
            <h2 className={styles.recomendations__title}>Рекомендація</h2>
            <div className={styles.recomendations__body}>
               <Tabs className={styles.ordersBodyTabs}>
                  <TabList className={styles.ordersBodyTabList}>
                     <Tab defaultChecked={true} className={styles.ordersBodyTab} selectedClassName={styles._active}>
                        <button>Для жінок</button>
                     </Tab>
                     <Tab className={styles.ordersBodyTab} selectedClassName={styles._active}>
                        <button>Для чоловіків</button>
                     </Tab>
                  </TabList>
                  <TabPanel>
                     {productColorsWomens && <ProductList productColors={productColorsWomens} itemsCount={10} />}
                  </TabPanel>
                  <TabPanel>
                     {productColorsMens && <ProductList productColors={productColorsMens} itemsCount={10} />}
                  </TabPanel>
               </Tabs>
            </div>
         </div>
      </div>
   );
}

export default Recommendations;