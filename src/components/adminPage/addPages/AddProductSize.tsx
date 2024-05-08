import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {productSizeAPI} from "../../../redux/api/productSizeAPI";

const AddProductSize: React.FunctionComponent = () => {
    const [addProductSize] = productSizeAPI.useAddMutation();

    const [size, setSize] = useState<string>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(size) {
            addProductSize({size: size});
            setSize(undefined);
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Size</Form.Label>
                    <Form.Control value={size ? size : ""} type="text" onChange={(e) => setSize(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AddProductSize;