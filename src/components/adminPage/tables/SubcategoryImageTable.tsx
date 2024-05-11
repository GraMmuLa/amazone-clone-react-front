import React, {useState} from "react";
import {subcategoryImageAPI} from "../../../redux/api/subcategoryImageAPI";
import {Button, Table} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import classes from "../AdminPage.module.css";
import ISubcategoryImage from "../../../interfaces/ISubcategoryImage";
import paginationClasses from "../../pagination/Pagination.module.css";
import arrow from "../../../imgs/arrow.svg";

const SubcategoryImageTable: React.FunctionComponent<{subcategoryImages: ISubcategoryImage[], itemsPerPage: number}> = ({subcategoryImages, itemsPerPage}) => {

    const [deleteSubcategoryImage] = subcategoryImageAPI.useDeleteMutation();

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = subcategoryImages.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(subcategoryImages.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % subcategoryImages.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            {subcategoryImages.length !== 0 ?
                <>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            {Object.keys(subcategoryImages[0]).map(key => <th key={key}>{key}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {currentItems.map(currentItem => (
                            <tr key={currentItem.id!}>
                                <td><img src={`data:image/jpg;base64,${currentItem.data}`} alt="Image"/></td>
                                <td>{currentItem.id!}</td>
                                <td>{currentItem.subcategoryId}</td>
                                <td>{new Date(currentItem.createdAt! - 7200000).toLocaleString('uk-UA')}</td>
                                <td><Button variant="danger"
                                            onClick={() => deleteSubcategoryImage(currentItem.id!)}>Delete</Button>
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

export default SubcategoryImageTable;