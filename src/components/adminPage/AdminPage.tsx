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
import {categoryImageAPI} from "../../redux/api/categoryImageAPI";
import {categoryAPI} from "../../redux/api/categoryAPI";
import {colorAPI} from "../../redux/api/colorAPI";
import {discountAPI} from "../../redux/api/discountAPI";
import {subcategoryAPI} from "../../redux/api/subcategoryAPI";
import {productTypeAPI} from "../../redux/api/productTypeAPI";
import {productAPI} from "../../redux/api/productAPI";
import {productColorAPI} from "../../redux/api/productColorAPI";
import {discountTypeAPI} from "../../redux/api/discountTypeAPI";
import {productReviewAPI} from "../../redux/api/productReviewAPI";
import {productSizeAPI} from "../../redux/api/productSizeAPI";
import {productColorSizeAPI} from "../../redux/api/productColorSizeAPI";
import {productDetailKeyAPI} from "../../redux/api/productDetailKeyAPI";
import {productDetailValueAPI} from "../../redux/api/productDetailValueAPI";
import {subcategoryImageAPI} from "../../redux/api/subcategoryImageAPI";
import {productColorImageAPI} from "../../redux/api/productColorImageAPI";
import SetMainImageProductColor from "./updatePages/SetMainImageProductColor";
import {productCardDesignAPI} from "../../redux/api/productCardDesignAPI";
import {productCardDesignImageAPI} from "../../redux/api/productCardDesignImageAPI";
import AddProductCardDesign from "./addPages/AddProductCardDesign";
import ProductCardDesignTable from "./tables/ProductCardDesignTable";
import ProductCardDesignImageTable from "./tables/ProductCardDesignImageTable";

const AdminPage: React.FunctionComponent = () => {

    const itemsPerPage = 5;

    const [fetchCategoryImages, {data: categoryImages}] = categoryImageAPI.useLazyFetchAllQuery();
    const [fetchColors, {data: colors}] = colorAPI.useLazyFetchAllQuery();
    const [fetchDiscounts, {data: discounts}] = discountAPI.useLazyFetchAllQuery();
    const [fetchSubcategories, {data: subcategories}] = subcategoryAPI.useLazyFetchAllQuery();
    const [fetchProductTypes, {data: productTypes}] = productTypeAPI.useLazyFetchAllQuery();
    const [fetchProducts, {data: products}] = productAPI.useLazyFetchAllQuery();
    const [fetchProductColors, {data: productColors}] = productColorAPI.useLazyFetchAllQuery();
    const [fetchProductCardDesigns, {data: productCardDesigns}] = productCardDesignAPI.useLazyFetchAllQuery();
    const [fetchDiscountTypes, {data: discountTypes}] = discountTypeAPI.useLazyFetchAllQuery();
    const [fetchProductReviews, {data: productReviews}] = productReviewAPI.useLazyFetchAllQuery();
    const [fetchProductSizes, {data: productSizes}] = productSizeAPI.useLazyFetchAllQuery();
    const [fetchProductColorSizes, {data: productColorSizes}] = productColorSizeAPI.useLazyFetchAllQuery();
    const [fetchProductDetailKeys, {data: productDetailKeys}] = productDetailKeyAPI.useLazyFetchAllQuery();
    const [fetchProductDetailValues, {data: productDetailValues}] = productDetailValueAPI.useLazyFetchAllQuery();
    const [fetchSubcategoryImages, {data: subcategoryImages}] = subcategoryImageAPI.useLazyFetchAllQuery();
    const [fetchProductColorImages, {data: productColorImages}] = productColorImageAPI.useLazyFetchAllQuery();
    const [fetchProductCardDesignImages, {data: productCardDesignImages}] = productCardDesignImageAPI.useLazyFetchAllQuery();
    const {data: categories} = categoryAPI.useFetchAllQuery();

    return (
        <Tabs className={classes.adminTabs}>
            <TabList className={classes.buttons__nav}>
                <Tab selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Категорії
                </Tab>
                <Tab onClick={()=>fetchSubcategories()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Підкатегорії
                </Tab>
                <Tab onClick={()=>fetchProductTypes()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Типи продукту
                </Tab>
                <Tab onClick={()=>fetchProducts()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Продукти
                </Tab>
                <Tab onClick={()=>fetchColors()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Колір
                </Tab>
                <Tab onClick={()=>fetchProductColors({})} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Колір продукту
                </Tab>
                <Tab onClick={()=>fetchProductCardDesigns()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Дизайн подарункових карток
                </Tab>
                <Tab onClick={()=>fetchDiscountTypes()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Тип знижки
                </Tab>
                <Tab onClick={()=>fetchDiscounts()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Знижки
                </Tab>
                <Tab onClick={()=>fetchProductReviews()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Відгуки
                </Tab>
                <Tab onClick={()=>fetchProductSizes()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Розміри
                </Tab>
                <Tab onClick={()=>fetchProductColorSizes()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Розмір + Колір продукту
                </Tab>
                <Tab onClick={()=>fetchProductDetailKeys()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Ключі деталей продукту
                </Tab>
                <Tab onClick={()=>fetchProductDetailValues()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Значення деталей продукту
                </Tab>
                <Tab onClick={()=>fetchCategoryImages()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Картинки категорій
                </Tab>
                <Tab onClick={()=>fetchSubcategoryImages()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Картинки підкатегорій
                </Tab>
                <Tab onClick={()=>fetchProductColorImages()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Картинки кольору продукту
                </Tab>
                <Tab onClick={()=>fetchProductCardDesignImages()} selectedClassName={classes.buttonLinkActive} className={classes.buttonLink}>
                    Картинки дизайну подарункової картки
                </Tab>
            </TabList>

            <TabPanel>
                <AddCategory />
                {categories && <CategoryTable categories={categories} itemsPerPage={itemsPerPage} /> }
            </TabPanel>

            <TabPanel>
                <AddSubcategory />
                {subcategories && <SubcategoryTable subcategories={subcategories} itemsPerPage={itemsPerPage} /> }
            </TabPanel>

            <TabPanel>
                <AddProductType />
                {productTypes && <ProductTypeTable productTypes={productTypes} itemsPerPage={itemsPerPage} />}
            </TabPanel>

            <TabPanel>
                <AddProduct />
                {products && <ProductTable products={products} itemsPerPage={itemsPerPage} /> }
            </TabPanel>

            <TabPanel>
                <AddColor />
                {colors && <ColorTable colors={colors} itemsPerPage={itemsPerPage} />}
            </TabPanel>

            <TabPanel>
                <AddProductColor />
                <SetMainImageProductColor/>
                {productColors && <ProductColorTable productColors={productColors} itemsPerPage={itemsPerPage} /> }
            </TabPanel>

            <TabPanel>
                <AddProductCardDesign />
                {productCardDesigns && <ProductCardDesignTable productCardDesigns={productCardDesigns} itemsPerPage={itemsPerPage} /> }
            </TabPanel>

            <TabPanel>
                <AddDiscountType />
                {discountTypes && <DiscountTypeTable discountTypes={discountTypes} itemsPerPage={itemsPerPage} />}
            </TabPanel>

            <TabPanel>
                <AddDiscount />
                {discounts && <DiscountTable discounts={discounts} itemsPerPage={itemsPerPage} />}
            </TabPanel>

            <TabPanel>
                {productReviews && <ProductReviewTable productReviews={productReviews} itemsPerPage={itemsPerPage} />}
            </TabPanel>

            <TabPanel>
                <AddProductSize />
                {productSizes && <ProductSizeTable productSizes={productSizes} itemsPerPage={itemsPerPage} />}
            </TabPanel>

            <TabPanel>
                <AddProductColorSize />
                {productColorSizes && <ProductColorSizeTable productColorSizes={productColorSizes} itemsPerPage={itemsPerPage} />}
            </TabPanel>

            <TabPanel>
                <AddProductDetailKey />
                {productDetailKeys && <ProductDetailKeyTable productDetailKeys={productDetailKeys} itemsPerPage={itemsPerPage} />}
            </TabPanel>

            <TabPanel>
                <AddProductDetailValue />
                {productDetailValues && <ProductDetailValueTable productDetailValues={productDetailValues} itemsPerPage={itemsPerPage} />}
            </TabPanel>

            <TabPanel>
                {categoryImages && <CategoryImageTable categoryImages={categoryImages} itemsPerPage={itemsPerPage} /> }
            </TabPanel>

            <TabPanel>
                {subcategoryImages && <SubcategoryImageTable subcategoryImages={subcategoryImages} itemsPerPage={itemsPerPage} />}
            </TabPanel>

            <TabPanel>
                {productColorImages && <ProductColorImageTable productColorImages={productColorImages} itemsPerPage={itemsPerPage} />}
            </TabPanel>

            <TabPanel>
                {productCardDesignImages && <ProductCardDesignImageTable productCardDesignImages={productCardDesignImages} itemsPerPage={itemsPerPage} /> }
            </TabPanel>
        </Tabs>
    );
}

export default AdminPage;