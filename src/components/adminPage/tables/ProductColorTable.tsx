import React, {useState} from "react";
import {productColorAPI} from "../../../redux/api/productColorAPI";
import AdminTable from "../AdminTable";
import {Button, Table} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import classes from "../AdminPage.module.css";
import IProductColor from "../../../interfaces/IProductColor";

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

export default ProductColorTable;