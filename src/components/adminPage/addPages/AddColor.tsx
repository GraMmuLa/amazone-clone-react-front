import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {colorAPI} from "../../../redux/api/colorAPI";
import {ProductTypeSelect} from "./AddProduct";
import {subcategoryAPI} from "../../../redux/api/subcategoryAPI";

export const AddColor:React.FunctionComponent = () => {

    const [addColor] = colorAPI.useAddMutation();

    const [subcategoryId, setSubcategoryId] = useState<number>();
    const [color, setColor] = useState<string>();

    const {data: subcategories} = subcategoryAPI.useFetchAllQuery();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(color && subcategoryId) {
            addColor({color, subcategoryId});
            setColor(undefined);
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Color name</Form.Label>
                    <Form.Control value={color ? color : ""} type="text" onChange={(e) => setColor(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subcategory</Form.Label>
                    <Form.Select value={subcategoryId ? subcategoryId : 0} onChange={(e) => setSubcategoryId(parseInt(e.target.value))}>
                        <option value={0}>Select Subcategory</option>
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