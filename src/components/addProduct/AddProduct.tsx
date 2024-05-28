import styles from "./AddProduct.module.css";
import React, { useState, useRef } from "react";
import AddProductSelect from "./addProductSelect/AddProductSelect";
import cross from "../../imgs/cross.svg";

const AddProduct: React.FunctionComponent = () => {
   const [selected, setSelected] = useState("Виберіть категорію");
   const [activeColor, setActiveColor] = useState<string>("");
   const [colors, setColors] = useState<string[]>([]);
   const colorInputRef = useRef<HTMLInputElement>(null);
   const [activeSize, setActiveSize] = useState<string>("");
   const [sizes, setSizes] = useState<string[]>([]);
   const sizeInputRef = useRef<HTMLInputElement>(null);

   const [files, setFiles] = useState<File[]>([]);

   const addImage = (e: React.ChangeEvent) => {
      const target = (e.target as HTMLInputElement)
      if (target.files != null)
         setFiles([...files, target.files[0]]);
   }

   return (
      <main className={styles.addProduct}>
         <div className={styles.addProduct__container}>
            <h2 className={styles.addProduct__title}>Додавання товару</h2>
            <div className={styles.addProduct__body}>
               <form className={`${styles.addProduct__form} ${styles.formAddProduct}`}>
                  <div className={styles.formAddProduct__item}>
                     <label htmlFor="">Назва товару</label>
                     <input id="" placeholder="Назва" type="text" />
                  </div>
                  <div className={styles.formAddProduct__item}>
                     <h3 className={styles.formAddProduct_addImageTitle}>Додайте фото </h3>
                     <div className={styles.formAddProduct_addImageBody}>
                        <div className={styles.formAddProduct_addImageInputBlock}>
                           <input onChange={(e) => addImage(e)} accept=".png, .jpg, .svg, .webp" type='file' name="addReviewAddImage" />
                           <button type="button"><img src={cross} alt="cross" /></button>
                        </div>
                        {files.map(file => {
                           return (
                              <button type="button" className={styles.formAddProduct_addImageItem}>
                                 <img key={file.name} src={URL.createObjectURL(file)} alt={"review item"} />
                              </button>
                           );
                        })}
                     </div>
                  </div>
                  <div className={styles.formAddProduct__item}>
                     <label htmlFor="">Категорії</label>
                     <AddProductSelect selected={selected} setSelected={setSelected} />
                  </div>
                  <div className={styles.formAddProduct__item}>
                     <label htmlFor="">Опис товару</label>
                     <textarea placeholder="Що для вас було найцікавішим?" name="formAddProduct textarea" id=""></textarea>
                  </div>
                  <div className={styles.formAddProduct__item}>
                     <label htmlFor="">Деталі продукту</label>
                     <input id="" placeholder="Деталі" type="text" />
                  </div>
                  <div className={styles.formAddProduct__item}>
                     <label htmlFor="">Додайте кольори</label>
                     <div className={styles.formAddProduct__inputBlock}>
                        <input
                           onChange={(e) => setActiveColor(e.target.value)}
                           ref={colorInputRef}
                           data-add
                           id=""
                           placeholder="Колір"
                           type="text"
                        />
                        <button
                           onClick={() => {
                              if (activeColor !== '' && !colors.includes(activeColor)) {
                                 setColors([...colors, activeColor]);
                                 setActiveColor('');
                                 if (colorInputRef.current) {
                                    colorInputRef.current.value = '';
                                 }
                              }
                           }}
                           type="button"
                        >
                           +
                        </button>
                     </div>
                     <div className={styles.formAddProduct__addBlock}>
                        {colors.map((colorItem, index) => (
                           <div key={index} className="">
                              <button onClick={() => setColors(colors.filter((color) => color !== colorItem))} type="button">-</button>
                              {colorItem}
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className={styles.formAddProduct__item}>
                     <label htmlFor="">Додайте варіанти розміру</label>
                     <div className={styles.formAddProduct__inputBlock}>
                        <input
                           onChange={(e) => setActiveSize(e.target.value)}
                           ref={sizeInputRef}
                           data-add
                           id=""
                           placeholder="Розмір"
                           type="text"
                        />
                        <button
                           onClick={() => {
                              if (activeSize !== '' && !sizes.includes(activeSize)) {
                                 setSizes([...sizes, activeSize]);
                                 setActiveSize('');
                                 if (sizeInputRef.current) {
                                    sizeInputRef.current.value = '';
                                 }
                              }
                           }}
                           type="button"
                        >
                           +
                        </button>
                     </div>
                     <div className={styles.formAddProduct__addBlock}>
                        {sizes.map((sizeItem, index) => (
                           <div key={index} className="">
                              <button onClick={() => setSizes(sizes.filter((size) => size !== sizeItem))} type="button">-</button>
                              {sizeItem}
                           </div>
                        ))}
                     </div>
                  </div>
                  <button type="submit" className="formAddProduct__btn">Додати товар</button>
               </form>
            </div >
         </div >
      </main >
   );
}

export default AddProduct;
