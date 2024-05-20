import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useParams } from "react-router";
import styles from "./Recomendations.module.css"

const Recomendations: React.FunctionComponent = () => {
   const { defaultIndex } = useParams();

   return (
      <div className="recomendations">
         <div className="recomendations__containerMax">
            <h2 className="recomendations__title"></h2>
            <div className="recomendations__body">
               <Tabs defaultIndex={defaultIndex ? parseInt(defaultIndex) : 0} className={styles.ordersBodyTabs}>
                  <TabList className={styles.ordersBodyTabList}>
                     <Tab className={styles.ordersBodyTab} selectedClassName={styles._active}>
                        <button>Замовлення</button>
                     </Tab>
                     <Tab className={styles.ordersBodyTab} selectedClassName={styles._active}>
                        <button>Замовити знову</button>
                     </Tab>
                  </TabList>
                  <TabPanel>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque, nemo accusantium tempore iusto quam veniam, placeat doloribus, autem dolores architecto ratione nesciunt quos. Earum quis laudantium dolorem maiores sequi!
                  </TabPanel>
                  <TabPanel>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque obcaecati facere quod! Neque.
                  </TabPanel>
               </Tabs>
            </div>
         </div>
      </div>
   );
}

export default Recomendations;