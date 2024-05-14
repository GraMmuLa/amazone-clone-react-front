import React from "react";
import SellerPageProductsItems from "./SellerPageProductsItems";
import styles from "./SellerPageProducts.module.css";


const SellerPageProducts: React.FunctionComponent = () => {

   const products = [
      {
         image: 'img1',
         title: 'title1 QINSEN  Жіночі міні-сукні з ліфом із квадратним вирізом jfoej iojfeij k foeo foeijse ef',
         price: 324,
         discount: true,
      },
      {
         image: 'img2',
         title: 'title2',
         price: 1324,
         discount: false,
      },
      {
         image: 'img3',
         title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt officiis, perferendis fugiat odit repellat perspiciatis sit tempore eius dolores eum eos tenetur. Expedita fugiat tempore unde reprehenderit possimus amet dolorum.',
         price: 3242,
         discount: false,
      },
      {
         image: 'img4',
         title: 'title4',
         price: 324235,
         discount: false,
      },
      {
         image: 'img5',
         title: 'title5',
         price: 14,
         discount: false,
      },
      {
         image: 'img6',
         title: 'title6',
         price: 322,
         discount: false,
      },
   ]

   return (
      <div className={styles.qinsenProducts}>
         <div className="qinsenProducts__containerMax">
            <SellerPageProductsItems products={products} />
         </div>
      </div>
   );
}

export default SellerPageProducts;