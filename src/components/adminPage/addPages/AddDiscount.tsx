import React, {Dispatch, SetStateAction, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {productColorAPI} from "../../../redux/api/productColorAPI";
import {discountTypeAPI} from "../../../redux/api/discountTypeAPI";
import {discountAPI} from "../../../redux/api/discountAPI";
import {productAPI} from "../../../redux/api/productAPI";
import {colorAPI} from "../../../redux/api/colorAPI";

const AddDiscount: React.FunctionComponent = () => {

    const [addDiscount] = discountAPI.useAddMutation();

    const {data: discountTypes} = discountTypeAPI.useFetchAllQuery();
    const {data: products} = productAPI.useFetchAllQuery();

    const [productColorId, setProductColorId] = useState<number>();
    const [productId, setProductId] = useState<number>();
    const [discountTypeId, setDiscountTypeId] = useState<number>();
    const [price, setPrice] = useState<number>();
    const [period, setPeriod] = useState<Date>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(price && period && productColorId && discountTypeId) {
            addDiscount({price: price, period: period.valueOf(), productColorId: productColorId, discountTypeId: discountTypeId});
            setPrice(undefined);
            setPeriod(undefined);
            setProductColorId(undefined);
            setDiscountTypeId(undefined);
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control value={price ? price : 0} step=".01" type="number" onChange={(e) => setPrice(parseFloat(e.target.value))}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Period</Form.Label>
                    <Form.Control value={period?.toISOString()} type="date" onChange={(e) => setPeriod(new Date(e.target.value))}/>
                </Form.Group>
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
                    <Form.Label>Discount Type id</Form.Label>
                    <Form.Select value={discountTypeId ? discountTypeId : 0} onChange={(e) => setDiscountTypeId(parseInt(e.target.value))}>
                        <option value={0}>Select Discount Type</option>
                        {discountTypes && discountTypes.map(discountType => <option key={discountType.id} value={discountType.id}>{discountType.type}</option>)}
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export const ProductColorSelect: React.FunctionComponent<{productId: number, productColorId: number | undefined, setProductColorId: Dispatch<SetStateAction<number | undefined>>}> = ({productId, productColorId, setProductColorId}) => {

    const {data: productColors} = productColorAPI.useFetchAllByProductIdQuery(productId);

    return (
        <>
            { productColors &&
                <Form.Select value={productColorId ? productColorId : 0} onChange={(e) => setProductColorId(parseInt(e.target.value))}>
                    <option value={0}>Select Product Color</option>
                    {productColors && productColors.map(productColor => <option key={productColor.id} value={productColor.id}><ColorByProductColorId colorId={productColor.colorId}/></option>)}
                </Form.Select>
            }
        </>
    );
}

export const ColorByProductColorId: React.FunctionComponent<{colorId: number}> = ({colorId}) => {
    const {data: color} = colorAPI.useFetchByIdQuery(colorId);

    return (
        <span>{color && color.color}</span>
    );
}

export default AddDiscount;