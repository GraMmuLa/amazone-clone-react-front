import React, {useState} from "react";
import {productTypeAPI} from "../../../redux/api/productTypeAPI";
import AdminTable from "../AdminTable";
import {Button, Table} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import classes from "../AdminPage.module.css";
import IProductType from "../../../interfaces/IProductType";

export const ProductTypeTable: React.FunctionComponent<{productTypes: IProductType[], itemsPerPage: number}> = ({productTypes, itemsPerPage}) => {

    const [deleteProductType] = productTypeAPI.useDeleteMutation();

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = productTypes.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productTypes.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % productTypes.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            {productTypes.length !== 0 ?
                <>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            {Object.keys(productTypes[0]).map(key => <th key={key}>{key}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {currentItems.map(currentItem => (
                            <tr key={currentItem.id!}>
                                <td>{currentItem.id!}</td>
                                <td>{currentItem.name}</td>
                                <td>{currentItem.subcategoryId}</td>
                                <td>{currentItem.productIds && currentItem.productIds.join(", ")}</td>
                                <td>{new Date(currentItem.createdAt!-7200000).toLocaleString('uk-UA')}</td>
                                <td><Button variant="danger"
                                            onClick={(e) => deleteProductType(currentItem.id!)}>Delete</Button>
                                </td>
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
                </> :
                <h2>Empty table</h2>
            }
        </>
    );
}

export default ProductTypeTable;