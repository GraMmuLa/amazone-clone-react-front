import {Button, Container, Form} from "react-bootstrap";
import React, {useState} from "react";
import {productColorAPI} from "../../../redux/api/productColorAPI";

const SetMainImageProductColor: React.FunctionComponent = () => {

    const [setProductColorMainImage] = productColorAPI.useSetMainImageMutation();

    const [mainImageId, setMainImageId] = useState<number>();
    const [productColorId, setProductColorId] = useState<number>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(mainImageId && productColorId) {
            setProductColorMainImage({productColorId, productColorImageId: mainImageId});
            setProductColorId(undefined);
            setMainImageId(undefined);
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Product Color Id</Form.Label>
                    <Form.Control value={productColorId ? productColorId : ""} type="text" onChange={(e) => setProductColorId(parseInt(e.target.value))}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Main Product Color Image Id</Form.Label>
                    <Form.Control value={mainImageId ? mainImageId : ""} type="text" onChange={(e) => setMainImageId(parseInt(e.target.value))}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default SetMainImageProductColor;