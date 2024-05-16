import React, {useState} from "react";
import {productReviewAPI} from "../../../redux/api/productReviewAPI";
import {Button, Table} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import classes from "../AdminPage.module.css";
import IReview from "../../../interfaces/IReview";
import paginationClasses from "../../pagination/Pagination.module.css";
import arrow from "../../../imgs/arrow.svg";

export const ProductReviewTable: React.FunctionComponent<{productReviews: IReview[], itemsPerPage: number}> = ({productReviews, itemsPerPage}) => {

    const [deleteProductReview] = productReviewAPI.useDeleteMutation();

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = productReviews.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productReviews.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % productReviews.length;
        setItemOffset(newOffset);
    };

    //TODO
    return (
        <>
            {productReviews.length !== 0 ?
                <>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            {Object.keys(productReviews[0]).map(key => <th key={key}>{key}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {currentItems.map(currentItem => (
                            <tr key={currentItem.id!}>
                                <td>{currentItem.id!}</td>
                                <td>{currentItem.mark}</td>
                                <td>{currentItem.userId}</td>
                                <td>{currentItem.reviewText}</td>
                                <td>{currentItem.productId}</td>
                                <td>{new Date(currentItem.createdAt!-7200000).toLocaleString('uk-UA')}</td>
                                <td><Button variant="danger"
                                            onClick={(e) => deleteProductReview(currentItem.id!)}>Delete</Button>
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

export default ProductReviewTable;