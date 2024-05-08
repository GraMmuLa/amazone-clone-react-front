import React, {useState} from "react";
import {productTypeAPI} from "../../../redux/api/productTypeAPI";
import {Button, Container, Form} from "react-bootstrap";
import {productDetailKeyAPI} from "../../../redux/api/productDetailKeyAPI";

const AddProductDetailKey: React.FunctionComponent = () => {
    const [addMutation] = productDetailKeyAPI.useAddMutation();
    const {data: productTypes} = productTypeAPI.useFetchAllQuery();

    const [key, setKey] = useState<string>();
    const [productTypeId, setProductTypeId] = useState<number>();

    const addProductDetailKey = (e: React.FormEvent) => {
        e.preventDefault();
        if(key && productTypeId) {
            addMutation({key: key, productTypeId: productTypeId});
            setKey(undefined);
            setProductTypeId(undefined);
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => addProductDetailKey(e)}>
                <Form.Group>
                    <Form.Label>Product Detail Key name</Form.Label>
                    <Form.Control value={key ? key : ""} type="text" onChange={(e) => setKey(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product Type</Form.Label>
                    <Form.Select value={productTypeId ? productTypeId : 0} onChange={(e) => setProductTypeId(parseInt(e.target.value))}>
                        <option value={0}>Select Product Type</option>
                        {productTypes && productTypes.map(productType => <option key={productType.id} value={productType.id}>{productType.name}</option>)}
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AddProductDetailKey;