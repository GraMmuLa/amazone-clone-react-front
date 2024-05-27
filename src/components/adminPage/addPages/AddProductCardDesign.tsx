import React, {useRef, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {productCardDesignImageAPI} from "../../../redux/api/productCardDesignImageAPI";
import {productCardDesignAPI} from "../../../redux/api/productCardDesignAPI";

const AddProductCardDesign: React.FunctionComponent = () => {

    const [designName, setDesignName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [image, setImage] = useState<File>();

    const [addProductCardDesign] = productCardDesignAPI.useAddMutation();
    const [addProductCardDesignImage] = productCardDesignImageAPI.useAddMutation();

    const inputFile = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(designName && description && image) {
            const result = await addProductCardDesign({name: designName, description: description}).unwrap();
            if(!result)
                return;
            if(result.id)
                addProductCardDesignImage({data: image, productCardDesignId: result.id});
            setDesignName(undefined);
            setDescription(undefined);
            setImage(undefined);
            imageReset();
        }
    }

    const addImage = (e: React.ChangeEvent) => {
        const target = (e.target as HTMLInputElement)
        if (target.files != null)
            setImage(target.files[0]);
    }

    const imageReset = () => {
        if (inputFile.current) {
            inputFile.current.value = "";
            inputFile.current.type = "text";
            inputFile.current.type = "file";
        }
    };

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Product Card Design Name</Form.Label>
                    <Form.Control value={designName ? designName : ""} type="text" onChange={(e) => setDesignName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product Card Design Description</Form.Label>
                    <Form.Control value={description ? description : ""} as="textarea" onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Import Product Card Design Image File</Form.Label>
                    <Form.Control ref={inputFile} type="file" onChange={(e) => addImage(e)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AddProductCardDesign;