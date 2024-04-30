import React, {useState} from "react";
import {categoryImageAPI} from "../../../redux/api/categoryImageAPI";
import {categoryAPI} from "../../../redux/api/categoryAPI";
import {Button, Container, Form} from "react-bootstrap";

const AddCategoryImage: React.FunctionComponent = () => {

    const [addMutation] = categoryImageAPI.useAddMutation();
    const {data: categories, isLoading} = categoryAPI.useFetchAllQuery();

    const [data, setData] = useState<File>();
    const [categoryId, setCategoryId] = useState<number>();

    const addCategory = (e: React.FormEvent) => {
        e.preventDefault();
        if (data && categoryId)
            addMutation({file: data, categoryId});
    }

    const addData = (e: React.ChangeEvent) => {
        const target = (e.target as HTMLInputElement)
        if (target.files != null)
            setData(target.files[0]);
    }

    return (
        <Container>
            {isLoading ?
                <div>Loading...</div> :
                <Form encType="multipart/form-data" onSubmit={(e) => addCategory(e)}>
                    <Form.Group>
                        <Form.Label>Import file</Form.Label>
                        <Form.Control type="file" onChange={(e) => addData(e)}/>
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
            }
        </Container>
    );
}

export default AddCategoryImage;