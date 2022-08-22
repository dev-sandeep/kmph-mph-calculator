import * as react from "react";
import {Form} from "react-bootstrap";

const KiloComponent = (props)=>{
    const onChangeHandler = (e)=>{
       props.calculate(e.target.value, 1);
    }
    return(<div className="kilo" style={{width:"300px"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Speed in Kmph</Form.Label>
        <Form.Control value={props.speed} onChange={onChangeHandler} type="text" placeholder="speed" />
      </Form.Group>
    </div>)
}

export default KiloComponent;