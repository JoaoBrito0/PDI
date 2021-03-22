import React from 'react';
import {Form, Button} from 'react-bootstrap';

function NewIncome({amountLabel, setAmountLabel, income, setIncome}) {
    function changeAmount(e){
        setAmountLabel(e.target.value);
    }

    function sumbmited(e){
        e.preventDefault();
        setIncome([
            ...income,
            {balanco: amountLabel, id: Math.random() * 1000}
        ]);
        setAmountLabel(0);
    }

    return(
        <Form>
            <h2>Add new Income/Expense</h2>
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select">
            <option>House</option>
            <option>Food</option>
            <option>Shopping</option>
            </Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control value={amountLabel} type="text" placeholder="Amount" onChange={changeAmount} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={sumbmited} block>Add</Button>                                        
        </Form>
    );
}

export default NewIncome;