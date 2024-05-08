import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {colorAPI} from "../../../redux/api/colorAPI";

export const AddColor:React.FunctionComponent = () => {

    const [addColor] = colorAPI.useAddMutation();

    const [color, setColor] = useState<string>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(color) {
            addColor({color: color});
            setColor(undefined);
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Color name</Form.Label>
                    <Form.Control value={color ? color : ""} type="text" onChange={(e) => setColor(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}