import React, {useState} from "react";
import IProductCardDesign from "../../../interfaces/IProductCardDesign";
import {Button, Table} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import paginationClasses from "../../pagination/Pagination.module.css";
import arrow from "../../../imgs/arrow.svg";
import {productCardDesignAPI} from "../../../redux/api/productCardDesignAPI";

const ProductCardDesignTable: React.FunctionComponent<{productCardDesigns: IProductCardDesign[], itemsPerPage: number}> = (
    {productCardDesigns, itemsPerPage}
) => {

    const [deleteProductCardDesign] = productCardDesignAPI.useDeleteMutation();

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = productCardDesigns.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productCardDesigns.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % productCardDesigns.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            {productCardDesigns.length !== 0 ?
                <>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            {Object.keys(productCardDesigns[0]).map(key => <th key={key}>{key}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {currentItems.map(currentItem => (
                            <tr key={currentItem.id!}>
                                <td>{currentItem.id!}</td>
                                <td>{currentItem.name}</td>
                                <td>{currentItem.description}</td>
                                <td>{currentItem.productCardDesignImageId}</td>
                                <td>{currentItem.productCardIds!.join(', ')}</td>
                                <td>{new Date(currentItem.createdAt! - 7200000).toLocaleString('uk-UA')}</td>
                                <td><Button variant="danger"
                                            onClick={(e) => deleteProductCardDesign(currentItem.id!)}>Delete</Button>
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

export default ProductCardDesignTable;