import React, {useState} from "react";
import {Button, Table} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import classes from "./AdminPage.module.css";
import IEntity from "../../interfaces/IEntity";

const AdminTable: React.FunctionComponent<{items: IEntity[], itemsPerPage: number, deleteMutation: (id: number) => void}> = ({items, itemsPerPage, deleteMutation}) => {

    const [itemOffset, setItemOffset] = useState(0);

    if(!items || items.length === 0)
        return (<h2>Empty table</h2>);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    {Object.keys(items[0]).map(key=><th key={key}>{key}</th>)}
                </tr>
                </thead>
                <tbody>
                {currentItems.map(currentItem => (
                    <tr key={currentItem.id}>
                        {Object.values(currentItem).map(value => {
                            if(typeof value === "object" && value)
                                return (<td>{Object.values(value).join(', ')}</td>);
                            else if(typeof value === "string" && value.length > 255)
                                return (<td><img src={`data:image/jpg;base64,${value}`} alt="Image"/></td>);
                            return <td>{value}</td>;
                        })}
                        <td><Button variant="danger" onClick={(e)=>deleteMutation(currentItem.id!)}>Delete</Button></td>
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
        </>
    );
}

export default AdminTable;
