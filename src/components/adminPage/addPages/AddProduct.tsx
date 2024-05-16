import React, {Dispatch, SetStateAction, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {productAPI} from "../../../redux/api/productAPI";
import {productTypeAPI} from "../../../redux/api/productTypeAPI";
import {subcategoryAPI} from "../../../redux/api/subcategoryAPI";
import {ColorByProductColorId, ProductColorSelect} from "./AddDiscount";
import {productColorAPI} from "../../../redux/api/productColorAPI";
import {userAPI} from "../../../redux/api/userAPI";

const AddProduct: React.FunctionComponent = () => {
    const [addMutation] = productAPI.useAddMutation();
    const {data: subcategories } = subcategoryAPI.useFetchAllQuery();
    const {data: users } = userAPI.useFetchAllQuery();

    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [subcategoryId, setSubcategoryId] = useState<number>();
    const [productTypeId, setProductTypeId] = useState<number>();
    const [userId, setUserId] = useState<number>();

    const addProduct = (e: React.FormEvent) => {
        e.preventDefault();
        if(name && description && subcategoryId && productTypeId && userId) {
            addMutation({name, description, productTypeId, userId});
            setName(undefined);
            setDescription(undefined);
            setSubcategoryId(undefined);
            setProductTypeId(undefined);
            setUserId(undefined);
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
                    <Form.Label>Product description</Form.Label>
                    <Form.Control value={description ? description : ""} as="textarea" onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Subcategory</Form.Label>
                    <Form.Select value={subcategoryId ? subcategoryId : 0} onChange={(e) => setSubcategoryId(parseInt(e.target.value))}>
                        <option value={0}>Select Subcategory</option>
                        {subcategories && subcategories.map(subcategory => <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>)}
                    </Form.Select>
                    { subcategoryId &&
                        <ProductTypeSelect subcategoryId={subcategoryId} productTypeId={productTypeId} setProductTypeId={setProductTypeId}/>
                    }
                </Form.Group>

                <Form.Group>
                    <Form.Label>User Id</Form.Label>
                    <Form.Select value={userId ? userId : 0} onChange={(e) => setUserId(parseInt(e.target.value))}>
                        <option value={0}>Select User</option>
                        {users && users.map(user => <option key={user.id} value={user.id}>{user.username}</option>)}
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export const ProductTypeSelect: React.FunctionComponent<{subcategoryId: number, productTypeId: number | undefined, setProductTypeId: Dispatch<SetStateAction<number | undefined>>}> = ({subcategoryId, productTypeId, setProductTypeId}) => {

    const {data: productTypes} = productTypeAPI.useFetchAllBySubcategoryQuery(subcategoryId);

    return (
        <>
            { productTypes &&
                <Form.Select value={productTypeId ? productTypeId : 0} onChange={(e) => setProductTypeId(parseInt(e.target.value))}>
                    <option value={0}>Select Product Type</option>
                    {productTypes && productTypes.map(productType => <option key={productType.id} value={productType.id}>{productType.name}</option>)}
                </Form.Select>
            }
        </>
    );
}

export default AddProduct;