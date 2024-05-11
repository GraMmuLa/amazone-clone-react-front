import React, {useState} from "react";
import {categoryAPI} from "../../../redux/api/categoryAPI";
import {Button, Table} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import ICategory from "../../../interfaces/ICategory";
import paginationClasses from "../../pagination/Pagination.module.css";
import arrow from "../../../imgs/arrow.svg";

const CategoryTable: React.FunctionComponent<{categories: ICategory[], itemsPerPage: number}> = ({categories, itemsPerPage}) => {

    const [deleteCategory] = categoryAPI.useDeleteMutation();

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = categories.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(categories.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % categories.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            {categories.length !== 0 ?
                <>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            {Object.keys(categories[0]).map(key => <th key={key}>{key}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {currentItems.map(currentItem => (
                            <tr key={currentItem.id!}>
                                <td>{currentItem.id!}</td>
                                <td>{currentItem.name}</td>
                                <td>{currentItem.subcategoriesIds!.join(', ')}</td>
                                <td>{currentItem.categoryImageId!}</td>
                                <td>{new Date(currentItem.createdAt! - 7200000).toLocaleString('uk-UA')}</td>
                                <td><Button variant="danger"
                                            onClick={(e) => deleteCategory(currentItem.id!)}>Delete</Button>
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

export default CategoryTable;