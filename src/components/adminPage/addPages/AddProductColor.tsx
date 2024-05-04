import React, {useRef, useState} from "react";
import {productAPI} from "../../../redux/api/productAPI";
import {Button, Container, Form} from "react-bootstrap";
import {colorAPI} from "../../../redux/api/colorAPI";
import {productColorAPI} from "../../../redux/api/productColorAPI";



const AddProductColor: React.FunctionComponent = () => {
    const [addMutation] = productColorAPI.useAddWithImageMutation();
    const {data: colors} = colorAPI.useFetchAllQuery();
    const {data: products} = productAPI.useFetchAllQuery();

    const [colorId, setColorId] = useState<number>();
    const [productId, setProductId] = useState<number>();
    const [productColorImages, setProductColorImages] = useState<File[]>([]);

    const inputFile = useRef<HTMLInputElement>(null);

    const subcategoryImageReset = () => {
        if (inputFile.current) {
            inputFile.current.value = "";
            inputFile.current.type = "text";
            inputFile.current.type = "file";
        }
    };

    const addProductColorImage = (e: React.ChangeEvent) => {
        const target = (e.target as HTMLInputElement)
        if (target.files != null)
            for(let i = 0; i < target.files.length; ++i)
                productColorImages.push(target.files[i]);
    }

    const addProductColor = (e: React.FormEvent) => {
        e.preventDefault();
        if(colorId && productId && productColorImages.length !== 0) {
            addMutation({productColor: {colorId, productId}, files: productColorImages});
            setColorId(undefined);
            setProductId(undefined);
            setProductColorImages([]);
            subcategoryImageReset();
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => addProductColor(e)}>
                <Form.Group>
                    <Form.Label>Color id</Form.Label>
                    <Form.Select value={colorId ? colorId : 0} onChange={(e) => setColorId(parseInt(e.target.value))}>
                        <option value={0}>Select Product Type</option>
                        {colors && colors.map(color => <option key={color.id} value={color.id}>{color.color}</option>)}
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product id</Form.Label>
                    <Form.Select value={productId ? productId : 0} onChange={(e) => setProductId(parseInt(e.target.value))}>
                        <option value={0}>Select Product Type</option>
                        {products && products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)}
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Import product color images files(1 will be main image)</Form.Label>
                    <Form.Control multiple ref={inputFile} type="file" onChange={(e) => addProductColorImage(e)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AddProductColor;