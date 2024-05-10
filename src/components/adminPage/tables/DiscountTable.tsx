import React, {useState} from "react";
import {productReviewAPI} from "../../../redux/api/productReviewAPI";
import {discountAPI} from "../../../redux/api/discountAPI";
import AdminTable from "../AdminTable";
import {Button, Table} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import classes from "../AdminPage.module.css";
import IDiscount from "../../../interfaces/IDiscount";

const DiscountTable: React.FunctionComponent<{discounts: IDiscount[], itemsPerPage: number}> = ({discounts, itemsPerPage}) => {

    const [deleteDiscount] = discountAPI.useDeleteMutation();

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = discounts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(discounts.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % discounts.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            {discounts.length !== 0 ?
                <>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            {Object.keys(discounts[0]).map(key => <th key={key}>{key}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {currentItems.map(currentItem => (
                            <tr key={currentItem.id!}>
                                <td>{currentItem.id!}</td>
                                <td>{currentItem.price}</td>
                                <td>{new Date(currentItem.period!).toLocaleString('uk-UA')}</td>
                                <td>{currentItem.discountTypeId!}</td>
                                <td>{currentItem.productColorId!}</td>
                                <td>{new Date(currentItem.createdAt!-7200000).toLocaleString('uk-UA')}</td>
                                <td><Button variant="danger"
                                            onClick={(e) => deleteDiscount(currentItem.id!)}>Delete</Button>
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

export default DiscountTable;