import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {productAPI} from "../../../redux/api/productAPI";
import {productTypeAPI} from "../../../redux/api/productTypeAPI";

const AddProduct: React.FunctionComponent = () => {
    const [addMutation] = productAPI.useAddMutation();
    const {data: productTypes} = productTypeAPI.useFetchAllQuery();

    const [name, setName] = useState<string>();
    const [price, setPrice] = useState<number>();
    const [description, setDescription] = useState<string>();
    const [productTypeId, setProductTypeId] = useState<number>();

    const addProduct = (e: React.FormEvent) => {
        e.preventDefault();
        if(name && price && description && productTypeId) {
            addMutation({name, price, description, productTypeId});
            setName(undefined);
            setPrice(undefined);
            setDescription(undefined);
            setProductTypeId(undefined);
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => addProduct(e)}>
                <Form.Group>
                    <Form.Label>Product name</Form.Label>
                    <Form.Control value={name ? name : ""} type="text" onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control value={price ? price : ""} type="number" step=".01" onChange={(e) => setPrice(parseFloat(e.target.value))}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product description</Form.Label>
                    <Form.Control value={description ? description : ""} as="textarea" onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product Type id</Form.Label>
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

export default AddProduct;