import React from "react"
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import classes from "./AdminPage.module.css"

import {
    CategoryAdminTable,
    CategoryImageAdminTable, ColorAdminTable,
    DiscountAdminTable,
    DiscountTypeAdminTable,
    ProductAdminTable,
    ProductColorAdminTable,
    ProductColorImageAdminTable,
    ProductDetailKeyAdminTable,
    ProductDetailValueAdminTable,
    ProductReviewAdminTable,
    ProductSizeAdminTable,
    ProductTypeAdminTable,
    SubcategoryAdminTable,
    SubcategoryImageAdminTable
} from "./AdminTables";

const AdminPage: React.FunctionComponent = () => {

    return (
        <Tabs>
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
                <CategoryAdminTable/>
            </TabPanel>

            <TabPanel>
                <SubcategoryAdminTable/>
            </TabPanel>

            <TabPanel>
                <ProductTypeAdminTable/>
            </TabPanel>

            <TabPanel>
                <ProductAdminTable/>
            </TabPanel>

            <TabPanel>
                <ColorAdminTable/>
            </TabPanel>

            <TabPanel>
                <ProductColorAdminTable/>
            </TabPanel>

            <TabPanel>
                <DiscountTypeAdminTable/>
            </TabPanel>

            <TabPanel>
                <DiscountAdminTable/>
            </TabPanel>

            <TabPanel>
                <ProductReviewAdminTable/>
            </TabPanel>

            <TabPanel>
                <ProductSizeAdminTable/>
            </TabPanel>

            <TabPanel>
                <ProductDetailKeyAdminTable/>
            </TabPanel>

            <TabPanel>
                <ProductDetailValueAdminTable/>
            </TabPanel>

            <TabPanel>
                <CategoryImageAdminTable/>
            </TabPanel>

            <TabPanel>
                <SubcategoryImageAdminTable/>
            </TabPanel>

            <TabPanel>
                <ProductColorImageAdminTable/>
            </TabPanel>
        </Tabs>
    );
}

export default AdminPage;