import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {discountTypeAPI} from "../../../redux/api/discountTypeAPI";

const AddDiscountType: React.FunctionComponent = () => {
    const [addDiscountType] = discountTypeAPI.useAddMutation();

    const [type, setType] = useState<string>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(type) {
            addDiscountType({type: type});
            setType(undefined);
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Discount type</Form.Label>
                    <Form.Control value={type ? type : ""} type="text" onChange={(e) => setType(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AddDiscountType;