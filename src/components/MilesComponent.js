import * as react from "react";
import {Form} from "react-bootstrap";

const MilesComponent = (props)=>{
    const onChangeHandler = (e)=>{
        props.calculate(e.target.value, 2);
    }
    return(<div className="mile" style={{width:"300px"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Speed in mph</Form.Label>
        <Form.Control onChange={onChangeHandler} value={props.speed} type="text" placeholder="speed" />
      </Form.Group>
    </div>)
}

export default MilesComponent;