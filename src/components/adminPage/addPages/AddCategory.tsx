import React, {useRef, useState} from "react";
import {categoryAPI} from "../../../redux/api/categoryAPI";
import {Button, Container, Form} from "react-bootstrap";

const AddCategory: React.FunctionComponent = () => {

    const [addCategory] = categoryAPI.useAddWithImageMutation();

    const [name, setName] = useState<string>();
    const [categoryImage, setCategoryImage] = useState<File>();

    const inputFile = useRef<HTMLInputElement>(null);

    const categoryImageReset = () => {
        if (inputFile.current) {
            inputFile.current.value = "";
            inputFile.current.type = "text";
            inputFile.current.type = "file";
        }
    };

    const addCategoryImage = (e: React.ChangeEvent) => {
        const target = (e.target as HTMLInputElement)
        if (target.files != null)
            setCategoryImage(target.files[0]);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(name && categoryImage) {
            addCategory({category: {name: name}, file: categoryImage});
            setName(undefined);
            setCategoryImage(undefined);
            categoryImageReset();
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Category name</Form.Label>
                    <Form.Control value={name ? name : ""} type="text" onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Import Category image file</Form.Label>
                    <Form.Control ref={inputFile} type="file" onChange={(e) => addCategoryImage(e)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AddCategory;