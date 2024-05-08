import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {productSizeAPI} from "../../../redux/api/productSizeAPI";
import {ProductColorSelect} from "./AddDiscount";
import {productAPI} from "../../../redux/api/productAPI";
import {productColorSizeAPI} from "../../../redux/api/productColorSizeAPI";

const AddProductColorSize: React.FunctionComponent = () => {

    const [addProductColorSize] = productColorSizeAPI.useAddMutation();

    const {data: products} = productAPI.useFetchAllQuery();
    const {data: productSizes} = productSizeAPI.useFetchAllQuery();

    const [productId, setProductId] = useState<number>();
    const [productColorId, setProductColorId] = useState<number>();
    const [productSizeId, setProductSizeId] = useState<number>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(productColorId && productSizeId) {
            addProductColorSize({productColorId, productSizeId});
            setProductColorId(undefined);
            setProductSizeId(undefined);
        }
    }

    return (
        <Container>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Product</Form.Label>
                    <Form.Select value={productId ? productId : 0} onChange={(e) => setProductId(parseInt(e.target.value))}>
                        <option value={0}>Select Product</option>
                        {products && products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)}
                    </Form.Select>
                    { productId &&
                        <ProductColorSelect productId={productId} productColorId={productColorId} setProductColorId={setProductColorId}/>
                    }
                </Form.Group>
                <Form.Group>
                    <Form.Label>Size</Form.Label>
                    <Form.Select value={productSizeId ? productSizeId : 0} onChange={(e) => setProductSizeId(parseInt(e.target.value))}>
                        <option value={0}>Select Product</option>
                        {productSizes && productSizes.map(productSize => <option key={productSize.id} value={productSize.id}>{productSize.size}</option>)}
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default AddProductColorSize;