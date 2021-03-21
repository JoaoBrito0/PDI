import React from 'react'
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Table
} from "react-bootstrap"
import Top from '../components/TopRow/Top';
import LastAddedTable from '../components/LastAdded/LastAddedTable';

function Dashboard() {
    return ( 
        <div className='dash'>
            <Container>
                <Top />
                <br/>
                <Row>
                   <LastAddedTable />
                    <Col>
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
                            <Form.Control type="text" placeholder="Amount" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                            </Form.Group>
                            <Button variant="primary" type="submit" block>Add</Button>                                        
                        </Form>
                     </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Dashboard;