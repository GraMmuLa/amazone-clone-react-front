import React, {useRef, useState} from "react";
import {categoryAPI} from "../../../redux/api/categoryAPI";
import {Button, Container, Form} from "react-bootstrap";
import {subcategoryAPI} from "../../../redux/api/subcategoryAPI";

const AddSubcategory: React.FunctionComponent = () => {
    const [addSubcategory] = subcategoryAPI.useAddWithImageMutation();
    const {data: categories} = categoryAPI.useFetchAllQuery();

    const [name, setName] = useState<string>();
    const [categoryId, setCategoryId] = useState<number>(0);
    const [subcategoryImage, setSubcategoryImage] = useState<File>();

    const inputFile = useRef<HTMLInputElement>(null);

    const subcategoryImageReset = () => {
        if (inputFile.current) {
            inputFile.current.value = "";
            inputFile.current.type = "text";
            inputFile.current.type = "file";
        }
    };

    const addSubcategoryImage = (e: React.ChangeEvent) => {
        const target = (e.target as HTMLInputElement)
        if (target.files != null)
            setSubcategoryImage(target.files[0]);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(name && subcategoryImage && categoryId !== 0) {
            addSubcategory({file: subcategoryImage, subcategory: {name, categoryId}});
            setName("");
            setSubcategoryImage(undefined);
            setCategoryId(0);
            subcategoryImageReset();
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Subcategory name</Form.Label>
                    <Form.Control value={name} type="text" onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category id</Form.Label>
                    <Form.Select value={categoryId} onChange={(e) => setCategoryId(parseInt(e.target.value))}>
                        <option value={0}>Select Category</option>
                        {categories && categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Import Subcategory image file</Form.Label>
                    <Form.Control ref={inputFile} type="file" onChange={(e) => addSubcategoryImage(e)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AddSubcategory;