import React from "react"
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {subcategoryAPI} from "../../redux/api/subcategoryAPI";
import {Table} from "react-bootstrap";
import classes from "./AdminPage.module.css"
import {productAPI} from "../../redux/api/productAPI";
import {productColorAPI} from "../../redux/api/productColorAPI";
import {categoryAPI} from "../../redux/api/categoryAPI";
import {discountTypeAPI} from "../../redux/api/discountTypeAPI";
import {discountAPI} from "../../redux/api/discountAPI";
import {productTypeAPI} from "../../redux/api/productTypeAPI";

const AdminPage: React.FunctionComponent = () => {

    const {data: categories, isLoading: isLoadingCategories} = categoryAPI.useFetchCategoriesQuery();
    const {data: subcategories, isLoading: isLoadingSubcategories} = subcategoryAPI.useFetchSubcategoriesQuery();
    const {data: productTypes, isLoading: isLoadingProductTypes} = productTypeAPI.useFetchProductTypesQuery();
    const {data: products, isLoading: isLoadingProducts} = productAPI.useFetchProductsQuery();
    const {data: productColors, isLoading: isLoadingProductColors} = productColorAPI.useFetchProductColorsQuery();
    const {data: discountTypes, isLoading: isLoadingDiscountTypes} = discountTypeAPI.useFetchDiscountTypesQuery();
    const {data: discounts, isLoading: isLoadingDiscounts} = discountAPI.useFetchDiscountsQuery();

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
            </TabList>
            <TabPanel>
                { isLoadingCategories ?
                    <div>Loading...</div> :
                    categories && <AdminTable objects={categories}/>
                }
            </TabPanel>
            <TabPanel>
                { isLoadingSubcategories ?
                    <div>Loading...</div> :
                    subcategories && <AdminTable objects={subcategories}/>
                }
            </TabPanel>
            <TabPanel>
                { isLoadingProductTypes ?
                    <div>Loading...</div> :
                    productTypes && <AdminTable objects={productTypes}/>
                }
            </TabPanel>
            <TabPanel>
                { isLoadingProducts ?
                    <div>Loading...</div> :
                    products && <AdminTable objects={products}/>
                }
            </TabPanel>
            <TabPanel>
                { isLoadingProductColors ?
                    <div>Loading...</div> :
                    productColors && <AdminTable objects={productColors}/>
                }
            </TabPanel>
            <TabPanel>
                { isLoadingDiscountTypes ?
                    <div>Loading...</div> :
                    discountTypes && <AdminTable objects={discountTypes}/>
                }
            </TabPanel>
            <TabPanel>
                { isLoadingDiscounts ?
                    <div>Loading...</div> :
                    discounts && <AdminTable objects={discounts}/>
                }
            </TabPanel>
            {/*TODO*/}
            {/*Відгуки*/}
            {/*Розміри*/}
        </Tabs>
    );
}

const AdminTable: React.FunctionComponent<{objects: Object[]}> = ({objects}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {Object.keys(objects[0]).map(key=><th>{key}</th>)}
                </tr>
            </thead>
            <tbody>
                {objects.map(object => (
                    <tr>
                    {Object.values(object).map(value=>{
                        if(typeof value === "object" && value) {
                            return <td>{Object.values(value).join(', ')}</td>;
                        }
                        return (<td>{value}</td>);
                        })}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default AdminPage;