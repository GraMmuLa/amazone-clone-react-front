import React, {useState} from "react";
import {categoryAPI} from "../../../redux/api/categoryAPI";
import {Button, Form} from "react-bootstrap";

const AddCategory: React.FunctionComponent = () => {
    const [addMutation] = categoryAPI.useAddMutation();

    const [name, setName] = useState<string>();

    const addCategory = (e: React.FormEvent) => {
        e.preventDefault();
        if(name)
            addMutation({name});
    }

    return (
        <Form onSubmit={(e) => addCategory(e)}>
            <Form.Group>
                <Form.Label>Category name</Form.Label>
                <Form.Control type="text" onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AddCategory;