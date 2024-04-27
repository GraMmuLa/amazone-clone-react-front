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
import {productReviewAPI} from "../../redux/api/productReviewAPI";
import {productColorImageAPI} from "../../redux/api/productColorImageAPI";
import {categoryImageAPI} from "../../redux/api/categoryImageAPI";
import {subcategoryImageAPI} from "../../redux/api/subcategoryImageAPI";
import {productDetailKeyAPI} from "../../redux/api/productDetailKeyAPI";
import {productDetailValueAPI} from "../../redux/api/productDetailValueAPI";

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

const CategoryAdminTable: React.FunctionComponent = () => {
    const {data: categories, isLoading} = categoryAPI.useFetchAllQuery();

    return (
            <>
                { isLoading ?
                 <div>Loading...</div> :
                 categories && <AdminTable objects={categories}/>}
            </>
    );
}

const SubcategoryAdminTable: React.FunctionComponent = () => {

    const {data: subcategories, isLoading} = subcategoryAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                subcategories && <AdminTable objects={subcategories}/>
            }
        </>
    );
}

const ProductTypeAdminTable: React.FunctionComponent = () => {

    const {data: productTypes, isLoading} = productTypeAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productTypes && <AdminTable objects={productTypes}/>
            }
        </>
    );
}

const ProductAdminTable: React.FunctionComponent = () => {
    const {data: products, isLoading} = productAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                products && <AdminTable objects={products}/>
            }
        </>
    )
}

const ProductColorAdminTable: React.FunctionComponent = () => {

    const {data: productColors, isLoading} = productColorAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productColors && <AdminTable objects={productColors}/>
            }
        </>
    );
}

const DiscountTypeAdminTable: React.FunctionComponent = () => {
    const {data: discountTypes, isLoading} = discountTypeAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                discountTypes && <AdminTable objects={discountTypes}/>
            }
        </>
    );
}

const DiscountAdminTable: React.FunctionComponent = () => {

    const {data: discounts, isLoading} = discountAPI.useFetchAllQuery();


    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                discounts && <AdminTable objects={discounts}/>
            }
        </>
    );
}

const ProductReviewAdminTable: React.FunctionComponent = () => {

    const {data: productReviews, isLoading} = productReviewAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productReviews && <AdminTable objects={productReviews}/>
            }
        </>
    );
}

const ProductSizeAdminTable: React.FunctionComponent = () => {

    const {data: productSizes, isLoading} = discountAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productSizes && <AdminTable objects={productSizes}/>
            }
        </>
    );
}

const ProductDetailKeyAdminTable: React.FunctionComponent = () => {
    const {data: productDetailKeys, isLoading} = productDetailKeyAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productDetailKeys && <AdminTable objects={productDetailKeys}/>}
        </>
    );
}

const ProductDetailValueAdminTable: React.FunctionComponent = () => {
    const {data: productDetailValues, isLoading} = productDetailValueAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productDetailValues && <AdminTable objects={productDetailValues}/>}
        </>
    );
}

const ProductColorImageAdminTable: React.FunctionComponent = () => {

    const {data: productColorImages, isLoading} = productColorImageAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productColorImages && <AdminTable objects={productColorImages}/>
            }
        </>
    );
}

const CategoryImageAdminTable: React.FunctionComponent = () => {

    const {data: categoryImages, isLoading} = categoryImageAPI.useFetchAllQuery();

    return (
      <>
          { isLoading ?
              <div>Loading...</div> :
              categoryImages && <AdminTable objects={categoryImages}/>
          }
      </>
    );
}

const SubcategoryImageAdminTable: React.FunctionComponent = () => {

    const {data: subcategoryImages, isLoading} = subcategoryImageAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                subcategoryImages && <AdminTable objects={subcategoryImages}/>
            }
        </>
    );
}


const AdminTable: React.FunctionComponent<{objects: {id: number, [key: string]: any}[]}> = ({objects}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {Object.keys(objects[0]).map(key=><th key={key}>{key}</th>)}
                </tr>
            </thead>
            <tbody>
            {objects.map(object => (
                <tr key={object.id}>
                    {Object.values(object).map(value => {
                        if(typeof value === "object" && value)
                            return (<td>{Object.values(value).join(', ')}</td>);
                        else if(typeof value === "string" && value.length > 255)
                            return (<td><img src={`data:image/jpg;base64,${value}`} alt="Image"/></td>);
                        return <td>{value}</td>;
                    })}
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default AdminPage;