import React, {useState} from "react";
import {categoryAPI} from "../../redux/api/categoryAPI";
import {subcategoryAPI} from "../../redux/api/subcategoryAPI";
import {productTypeAPI} from "../../redux/api/productTypeAPI";
import {productAPI} from "../../redux/api/productAPI";
import {productColorAPI} from "../../redux/api/productColorAPI";
import {discountTypeAPI} from "../../redux/api/discountTypeAPI";
import {discountAPI} from "../../redux/api/discountAPI";
import {productReviewAPI} from "../../redux/api/productReviewAPI";
import {productDetailKeyAPI} from "../../redux/api/productDetailKeyAPI";
import {productDetailValueAPI} from "../../redux/api/productDetailValueAPI";
import {productColorImageAPI} from "../../redux/api/productColorImageAPI";
import {categoryImageAPI} from "../../redux/api/categoryImageAPI";
import {subcategoryImageAPI} from "../../redux/api/subcategoryImageAPI";
import {Button, Table} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import classes from "./AdminPage.module.css";
import {productSizeAPI} from "../../redux/api/productSizeAPI";
import {colorAPI} from "../../redux/api/colorAPI";

const itemsPerPage = 3;

export const CategoryAdminTable: React.FunctionComponent = () => {

    const [deleteCategoryMutation] = categoryAPI.useDeleteMutation();

    const {data: categories, isLoading} = categoryAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                categories && <AdminTable itemsPerPage={itemsPerPage} items={categories} deleteMutation={deleteCategoryMutation}/>}
        </>
    );
}

export const SubcategoryAdminTable: React.FunctionComponent = () => {

    const [deleteSubcategoryMutation] = subcategoryAPI.useDeleteMutation();

    const {data: subcategories, isLoading} = subcategoryAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                subcategories && <AdminTable itemsPerPage={itemsPerPage} items={subcategories} deleteMutation={deleteSubcategoryMutation}/>
            }
        </>
    );
}

export const ProductTypeAdminTable: React.FunctionComponent = () => {

    const [deleteProductTypeMutation] = productTypeAPI.useDeleteMutation();

    const {data: productTypes, isLoading} = productTypeAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productTypes && <AdminTable itemsPerPage={itemsPerPage} items={productTypes} deleteMutation={deleteProductTypeMutation}/>
            }
        </>
    );
}

export const ProductAdminTable: React.FunctionComponent = () => {

    const [deleteProductMutation] = productAPI.useDeleteMutation();

    const {data: products, isLoading} = productAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                products && <AdminTable itemsPerPage={itemsPerPage} items={products} deleteMutation={deleteProductMutation}/>
            }
        </>
    )
}

export const ProductColorAdminTable: React.FunctionComponent = () => {

    const [deleteProductColorMutation] = productColorAPI.useDeleteMutation();

    const {data: productColors, isLoading} = productColorAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productColors && <AdminTable itemsPerPage={itemsPerPage} items={productColors} deleteMutation={deleteProductColorMutation}/>
            }
        </>
    );
}

export const DiscountTypeAdminTable: React.FunctionComponent = () => {

    const [deleteDiscountTypeMutation] = discountAPI.useDeleteMutation();

    const {data: discountTypes, isLoading} = discountTypeAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                discountTypes && <AdminTable itemsPerPage={itemsPerPage} items={discountTypes} deleteMutation={deleteDiscountTypeMutation}/>
            }
        </>
    );
}

export const DiscountAdminTable: React.FunctionComponent = () => {

    const [deleteProductReviewMutation] = productReviewAPI.useDeleteMutation();

    const {data: discounts, isLoading} = discountAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                discounts && <AdminTable itemsPerPage={itemsPerPage} items={discounts} deleteMutation={deleteProductReviewMutation}/>
            }
        </>
    );
}

export const ProductReviewAdminTable: React.FunctionComponent = () => {

    const [deleteProductReviewMutation] = productReviewAPI.useDeleteMutation();

    const {data: productReviews, isLoading} = productReviewAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productReviews && <AdminTable itemsPerPage={itemsPerPage} items={productReviews} deleteMutation={deleteProductReviewMutation}/>
            }
        </>
    );
}

export const ProductSizeAdminTable: React.FunctionComponent = () => {

    const [deleteProductSizeMutation] = productSizeAPI.useDeleteMutation();

    const {data: productSizes, isLoading} = productSizeAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productSizes && <AdminTable itemsPerPage={itemsPerPage} items={productSizes} deleteMutation={deleteProductSizeMutation}/>
            }
        </>
    );
}

export const ProductDetailKeyAdminTable: React.FunctionComponent = () => {

    const [deleteProductDetailKeyMutation] = productDetailKeyAPI.useDeleteMutation();

    const {data: productDetailKeys, isLoading} = productDetailKeyAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productDetailKeys && <AdminTable itemsPerPage={itemsPerPage} items={productDetailKeys} deleteMutation={deleteProductDetailKeyMutation}/>}
        </>
    );
}

export const ProductDetailValueAdminTable: React.FunctionComponent = () => {

    const [deleteProductDetailValueMutation] = productDetailValueAPI.useDeleteMutation();

    const {data: productDetailValues, isLoading} = productDetailValueAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productDetailValues && <AdminTable itemsPerPage={itemsPerPage} items={productDetailValues} deleteMutation={deleteProductDetailValueMutation}/>}
        </>
    );
}

export const ProductColorImageAdminTable: React.FunctionComponent = () => {

    const [deleteProductColorImageMutation] = productColorImageAPI.useDeleteMutation();

    const {data: productColorImages, isLoading} = productColorImageAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productColorImages && <AdminTable itemsPerPage={itemsPerPage} items={productColorImages} deleteMutation={deleteProductColorImageMutation}/>
            }
        </>
    );
}

export const CategoryImageAdminTable: React.FunctionComponent = () => {

    const [deleteCategoryImageMutation] = categoryImageAPI.useDeleteMutation();

    const {data: categoryImages, isLoading} = categoryImageAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                categoryImages && <AdminTable itemsPerPage={itemsPerPage} items={categoryImages} deleteMutation={deleteCategoryImageMutation}/>
            }
        </>
    );
}

export const SubcategoryImageAdminTable: React.FunctionComponent = () => {

    const [deleteSubcategoryImageMutation] = subcategoryImageAPI.useDeleteMutation();

    const {data: subcategoryImages, isLoading} = subcategoryImageAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                subcategoryImages && <AdminTable itemsPerPage={itemsPerPage} items={subcategoryImages} deleteMutation={deleteSubcategoryImageMutation}/>
            }
        </>
    );
}

export const ColorAdminTable: React.FunctionComponent = () => {
    const [deleteColorMutation] = colorAPI.useDeleteMutation();

    const {data: colors, isLoading} = colorAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                colors && <AdminTable itemsPerPage={itemsPerPage} items={colors} deleteMutation={deleteColorMutation}/>
            }
        </>
    )
}

const AdminTable: React.FunctionComponent<{items: {id?: number, [key: string]: any}[], itemsPerPage: number, deleteMutation: (id: number) => void}> = ({items, itemsPerPage, deleteMutation}) => {

    const [itemOffset, setItemOffset] = useState(0);

    if(!items || items.length === 0)
        return (<h2>Empty table</h2>);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    {Object.keys(items[0]).map(key=><th key={key}>{key}</th>)}
                </tr>
                </thead>
                <tbody>
                {currentItems.map(currentItem => (
                    <tr key={currentItem.id}>
                        {Object.values(currentItem).map(value => {
                            if(typeof value === "object" && value)
                                return (<td>{Object.values(value).join(', ')}</td>);
                            else if(typeof value === "string" && value.length > 255)
                                return (<td><img src={`data:image/jpg;base64,${value}`} alt="Image"/></td>);
                            return <td>{value}</td>;

                        })}
                        <td><Button variant="danger" onClick={(e)=>deleteMutation(currentItem.id!)}>Delete</Button></td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <ReactPaginate
                containerClassName={classes.pageContainer}
                breakLabel="..."
                onPageChange={handlePageClick}
                previousClassName={classes.pageNextPrevious}
                nextClassName={classes.pageNextPrevious}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                pageClassName={classes.pageItem}
                pageLinkClassName={classes.pageButton}
                activeLinkClassName={classes.pageButtonActive}
                renderOnZeroPageCount={null}
                marginPagesDisplayed={3}
            />
        </>
    );
}

