import React, {useState} from "react";
import {categoryAPI} from "../../../redux/api/categoryAPI";
import {Button, Form} from "react-bootstrap";
import {subcategoryAPI} from "../../../redux/api/subcategoryAPI";

const AddSubcategory: React.FunctionComponent = () => {
    const [addMutation] = subcategoryAPI.useAddMutation();
    const {data: categories} = categoryAPI.useFetchAllQuery();

    const [name, setName] = useState<string>();
    const [categoryId, setCategoryId] = useState<number>();

    const addSubcategory = (e: React.FormEvent) => {
        e.preventDefault();
        if(name && categoryId)
            addMutation({name, categoryId});
    }

    return (
        <Form onSubmit={(e) => addSubcategory(e)}>
            <Form.Group>
                <Form.Label>Category name</Form.Label>
                <Form.Control type="text" onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Category id</Form.Label>
                <Form.Select onChange={(e) => setCategoryId(parseInt(e.target.value))}>
                    <option>Select Category</option>
                    {categories && categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AddSubcategory;