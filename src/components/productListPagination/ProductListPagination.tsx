import styles from "./ProductListPagination.module.css";
import React, {useState} from "react";
import ProductItem from "../productList/ProductItem";
import IProductColor from "../../interfaces/IProductColor";
import ReactPaginate from "react-paginate";
import paginationClasses from "../pagination/Pagination.module.css";
import arrow from "../../imgs/arrow.svg";

const ProductListPagination: React.FunctionComponent<{productColors: IProductColor[], itemsPerPage:number}> = ({productColors, itemsPerPage}) => {

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
            <div className={styles.productList__container}>
                {productColors.length !== 0 &&
                    <>
                        <div className={styles.productList}>
                            <div className={styles.productList__items}>
                                {currentItems.map(currentItem => <ProductItem key={currentItem.id}
                                                                              productColor={currentItem}/>)}
                            </div>
                            <div className={styles.productList__pagination}>
                                <ReactPaginate
                                    containerClassName={paginationClasses.pagination}
                                    breakLabel="..."
                                    previousLabel={<img className={paginationClasses.arrowLeftImage} src={arrow}
                                                        alt="arrow left"/>}
                                    nextLabel={<img className={paginationClasses.arrowRightImage} src={arrow}
                                                    alt="arrow right"/>}
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
                            </div>
                        </div>


                    </>
                }
            </div>
        </>
    );
}

export default ProductListPagination;