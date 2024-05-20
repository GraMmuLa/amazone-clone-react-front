import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {productDetailKeyAPI} from "../../../redux/api/productDetailKeyAPI";
import {productAPI} from "../../../redux/api/productAPI";
import {productDetailValueAPI} from "../../../redux/api/productDetailValueAPI";

const AddProductDetailValue: React.FunctionComponent = () => {
    const [addMutation] = productDetailValueAPI.useAddMutation();
    const {data: productDetailKeys} = productDetailKeyAPI.useFetchAllQuery();
    const {data: products} = productAPI.useFetchAllQuery();

    const [value, setValue] = useState<string>();
    const [productDetailKeyId, setProductDetailKeyId] = useState<number>();
    const [productId, setProductId] = useState<number>();

    const addProductDetailKey = (e: React.FormEvent) => {
        e.preventDefault();
        if(value && productId && productDetailKeyId) {
            addMutation({value: value, productDetailKeyId: productDetailKeyId, productId: productId});
            setValue(undefined);
            setProductDetailKeyId(undefined);
            setProductId(undefined);
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => addProductDetailKey(e)}>
                <Form.Group>
                    <Form.Label>Product Detail Value</Form.Label>
                    <Form.Control value={value ? value : ""} type="text" onChange={(e) => setValue(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product Detail Key</Form.Label>
                    <Form.Select value={productDetailKeyId ? productDetailKeyId : 0} onChange={(e) => setProductDetailKeyId(parseInt(e.target.value))}>
                        <option value={0}>Select Product Detail Key</option>
                        {productDetailKeys && productDetailKeys.map(productDetailKey => <option key={productDetailKey.id} value={productDetailKey.id}>{productDetailKey.key}</option>)}
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product</Form.Label>
                    <Form.Select value={productId ? productId : 0} onChange={(e) => setProductId(parseInt(e.target.value))}>
                        <option value={0}>Select Product</option>
                        {products && products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)}
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AddProductDetailValue;