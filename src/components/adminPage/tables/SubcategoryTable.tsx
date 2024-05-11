import React, {useState} from "react";
import {subcategoryAPI} from "../../../redux/api/subcategoryAPI";
import {Button, Table} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import classes from "../AdminPage.module.css";
import ISubcategory from "../../../interfaces/ISubcategory";
import paginationClasses from "../../pagination/Pagination.module.css";
import arrow from "../../../imgs/arrow.svg";

const SubcategoryTable: React.FunctionComponent<{subcategories: ISubcategory[], itemsPerPage: number}> = ({subcategories, itemsPerPage}) => {

    const [deleteSubcategory] = subcategoryAPI.useDeleteMutation();

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = subcategories.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(subcategories.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % subcategories.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            {subcategories.length !== 0 ?
                <>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            {Object.keys(subcategories[0]).map(key => <th key={key}>{key}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {currentItems.map(currentItem => (
                            <tr key={currentItem.id!}>
                                <td>{currentItem.id!}</td>
                                <td>{currentItem.name}</td>
                                <td>{currentItem.categoryId}</td>
                                <td>{currentItem.subcategoryImageId!}</td>
                                <td>{currentItem.productTypeIds && currentItem.productTypeIds.join(", ")}</td>
                                <td>{new Date(currentItem.createdAt! - 7200000).toLocaleString('uk-UA')}</td>
                                <td><Button variant="danger"
                                            onClick={() => deleteSubcategory(currentItem.id!)}>Delete</Button>
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

export default SubcategoryTable;