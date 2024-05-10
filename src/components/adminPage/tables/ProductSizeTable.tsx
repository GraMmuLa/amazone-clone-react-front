import React, {useState} from "react";
import {productSizeAPI} from "../../../redux/api/productSizeAPI";
import AdminTable from "../AdminTable";
import {Button, Table} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import classes from "../AdminPage.module.css";
import IProductSize from "../../../interfaces/IProductSize";

export const ProductSizeTable: React.FunctionComponent<{productSizes: IProductSize[], itemsPerPage: number}> = ({productSizes, itemsPerPage}) => {

    const [deleteProductSize] = productSizeAPI.useDeleteMutation();

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = productSizes.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productSizes.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % productSizes.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            {productSizes.length !== 0 ?
                <>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            {Object.keys(productSizes[0]).map(key => <th key={key}>{key}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {currentItems.map(currentItem => (
                            <tr key={currentItem.id!}>
                                <td>{currentItem.id!}</td>
                                <td>{currentItem.size}</td>
                                <td>{currentItem.productColorIds!.join(", ")}</td>
                                <td>{new Date(currentItem.createdAt!-7200000).toLocaleString('uk-UA')}</td>
                                <td><Button variant="danger"
                                            onClick={(e) => deleteProductSize(currentItem.id!)}>Delete</Button>
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

export default ProductSizeTable;