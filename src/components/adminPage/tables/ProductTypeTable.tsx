import React, {useState} from "react";
import {productTypeAPI} from "../../../redux/api/productTypeAPI";
import {Button, Table} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import classes from "../AdminPage.module.css";
import IProductType from "../../../interfaces/IProductType";
import paginationClasses from "../../pagination/Pagination.module.css";
import arrow from "../../../imgs/arrow.svg";

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
                        containerClassName={paginationClasses.pagination}
                        breakLabel="..."
                        previousLabel={<img className={paginationClasses.arrowLeftImage} src={arrow} alt="arrow left"/>}
                        nextLabel={<img className={paginationClasses.arrowRightImage} src={arrow} alt="arrow right"/>}
                        previousClassName={paginationClasses.arrow}
                        nextClassName={paginationClasses.arrow}
                        disabledClassName={paginationClasses.disabled}
                        breakClassName={paginationClasses.disabled}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        pageClassName={paginationClasses.paginationItem}
                        activeClassName={paginationClasses.active}
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