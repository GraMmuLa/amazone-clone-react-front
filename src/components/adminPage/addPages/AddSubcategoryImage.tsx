import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {subcategoryImageAPI} from "../../../redux/api/subcategoryImageAPI";
import {subcategoryAPI} from "../../../redux/api/subcategoryAPI";

const AddSubcategoryImage: React.FunctionComponent = () => {

    const [addMutation] = subcategoryImageAPI.useAddMutation();
    const {data: subcategories, isLoading} = subcategoryAPI.useFetchAllQuery();

    const [data, setData] = useState<File>();
    const [subcategoryId, setSubcategoryId] = useState<number>();

    const addSubcategory = (e: React.FormEvent) => {
        e.preventDefault();
        if (data && subcategoryId)
            addMutation({file: data, subcategoryId: subcategoryId});
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
                <Form encType="multipart/form-data" onSubmit={(e) => addSubcategory(e)}>
                    <Form.Group>
                        <Form.Label>Import file</Form.Label>
                        <Form.Control type="file" onChange={(e) => addData(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category id</Form.Label>
                        <Form.Select onChange={(e) => setSubcategoryId(parseInt(e.target.value))}>
                            <option>Select Subcategory</option>
                            {subcategories && subcategories.map(subcategory => <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>)}
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

export default AddSubcategoryImage;