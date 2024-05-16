import React, {useState} from "react";
import {productColorAPI} from "../../../redux/api/productColorAPI";
import {Button, Table} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import classes from "../AdminPage.module.css";
import IProductColor from "../../../interfaces/IProductColor";
import paginationClasses from "../../pagination/Pagination.module.css";
import arrow from "../../../imgs/arrow.svg";

const ProductColorTable: React.FunctionComponent<{productColors: IProductColor[], itemsPerPage: number}> = ({productColors, itemsPerPage}) => {

    const [deleteProductColor] = productColorAPI.useDeleteMutation();

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = productColors.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productColors.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % productColors.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            {productColors.length !== 0 ?
                <>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            {Object.keys(productColors[0]).map(key => <th key={key}>{key}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {currentItems.map(currentItem => (
                            <tr key={currentItem.id!}>
                                <td>{currentItem.id!}</td>
                                <td>{currentItem.price}</td>
                                <td>{currentItem.productId}</td>
                                <td>{currentItem.colorId}</td>
                                <td>{currentItem.discountId && currentItem.discountId}</td>
                                <td>{currentItem.productColorImageIds!.join(", ")}</td>
                                <td>{currentItem.productSizeIds && currentItem.productSizeIds.join(", ")}</td>
                                <td>{currentItem.favouritedUserIds ? "" : currentItem.favouritedUserIds}</td>
                                <td>{currentItem.mainImageId!}</td>
                                <td>{new Date(currentItem.createdAt!-7200000).toLocaleString('uk-UA')}</td>
                                <td><Button variant="danger"
                                            onClick={(e) => deleteProductColor(currentItem.id!)}>Delete</Button>
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

export default ProductColorTable;