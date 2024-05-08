import React from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import classes from "./AdminPage.module.css"
import CategoryTable from "./tables/CategoryTable";
import SubcategoryTable from "./tables/SubcategoryTable";
import ProductTypeTable from "./tables/ProductTypeTable";
import ProductTable from "./tables/ProductTable";
import ColorTable from "./tables/ColorTable";
import ProductColorTable from "./tables/ProductColorTable";
import DiscountTypeTable from "./tables/DiscountTypeTable";
import DiscountTable from "./tables/DiscountTable";
import ProductReviewTable from "./tables/ProductReviewTable";
import ProductSizeTable from "./tables/ProductSizeTable";
import ProductDetailKeyTable from "./tables/ProductDetailKeyTable";
import ProductDetailValueTable from "./tables/ProductDetailValueTable";
import CategoryImageTable from "./tables/CategoryImageTable";
import SubcategoryImageTable from "./tables/SubcategoryImageTable";
import ProductColorImageTable from "./tables/ProductColorImageTable";
import AddCategory from "./addPages/AddCategory";
import AddSubcategory from "./addPages/AddSubcategory";
import AddProductType from "./addPages/AddProductType";
import AddProduct from "./addPages/AddProduct";
import AddProductDetailValue from "./addPages/AddProductDetailValue";
import AddProductDetailKey from "./addPages/AddProductDetailKey";
import { AddColor } from "./addPages/AddColor";
import AddProductColor from "./addPages/AddProductColor";
import AddProductSize from "./addPages/AddProductSize";
import AddDiscountType from "./addPages/AddDiscountType";
import AddDiscount from "./addPages/AddDiscount";
import AddProductColorSize from "./addPages/AddProductColorSize";
import ProductColorSizeTable from "./tables/ProductColorSizeTable";

const AdminPage: React.FunctionComponent = () => {

    const itemsPerPage = 5;

    return (
        <Tabs className={classes.adminTabs}>
            <TabList className={classes.buttons__nav}>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Категорії
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Підкатегорії
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Типи продукту
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Продукти
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Колір
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Колір продукту
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Тип знижки
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Знижки
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Відгуки
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Розміри
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Розмір + Колір продукту
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Ключі деталей продукту
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Значення деталей продукту
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Картинки категорій
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Картинки підкатегорій
                </Tab>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Картинки кольору продукту
                </Tab>
            </TabList>

            <TabPanel>
                <AddCategory />
                <CategoryTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <AddSubcategory />
                <SubcategoryTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <AddProductType />
                <ProductTypeTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <AddProduct />
                <ProductTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <AddColor />
                <ColorTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <AddProductColor />
                <ProductColorTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <AddDiscountType />
                <DiscountTypeTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <AddDiscount />
                <DiscountTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <ProductReviewTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <AddProductSize />
                <ProductSizeTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <AddProductColorSize />
                <ProductColorSizeTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <AddProductDetailKey />
                <ProductDetailKeyTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <AddProductDetailValue />
                <ProductDetailValueTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <CategoryImageTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <SubcategoryImageTable itemsPerPage={itemsPerPage} />
            </TabPanel>

            <TabPanel>
                <ProductColorImageTable itemsPerPage={itemsPerPage} />
            </TabPanel>
        </Tabs>
    );
}

export default AdminPage;