import React, {useState} from "react";
import {subcategoryAPI} from "../../../redux/api/subcategoryAPI";
import {Button, Container, Form} from "react-bootstrap";
import {productTypeAPI} from "../../../redux/api/productTypeAPI";
import {useNavigate} from "react-router-dom";

const AddProductType: React.FunctionComponent = () => {
    const [addMutation] = productTypeAPI.useAddMutation();
    const {data: subcategories} = subcategoryAPI.useFetchAllQuery();

    const [name, setName] = useState<string>();
    const [subcategoryId, setSubcategoryId] = useState<number>();

    const navigate = useNavigate();

    const addProductType = (e: React.FormEvent) => {
        e.preventDefault();
        if(name && subcategoryId) {
            addMutation({name, subcategoryId});
            navigate("/admin", { replace: true });
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => addProductType(e)}>
                <Form.Group>
                    <Form.Label>ProductType name</Form.Label>
                    <Form.Control type="text" onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subcategory id</Form.Label>
                    <Form.Select onChange={(e) => setSubcategoryId(parseInt(e.target.value))}>
                        <option>Select Subcategory</option>
                        {subcategories && subcategories.map(subcategory => <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>)}
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AddProductType;