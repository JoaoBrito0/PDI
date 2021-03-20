import React from 'react'
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Table
  } from "react-bootstrap"


function Dashboard() {
    return (
        <div className='Dash'>
            <Container>
                <Row className='mt-5 space'>
                        <Col className='border border rounded bg-blue'>
                            <p className='totals'>Total Balance</p>
                            <p className="amount">2000€</p>
                        </Col>

                        <Col className='border rounded bg-green'>
                            <p className='totals'>Monthly Income</p>
                            <p className="amount">2000€</p>
                        </Col>

                        <Col className='border rounded bg-red'>
                            <p className='totals'>Monthly Expenses</p>
                            <p className="amount">2000€</p>
                        </Col>

                        <Col className='border rounded bg-ye'> 
                            <p className='totals'>Budget Progress</p>
                            <p className="amount">2000€</p>
                        </Col>
                    </Row>
                <span></span>
                <Row>

                    <Col>
                    <h2>Last Added</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>House</td>
                            <td>500</td>
                            <td>Morgage payment</td>
                            </tr>
                            <tr>
                            <td>Food</td>
                            <td>25</td>
                            <td>groceries</td>
                            </tr>
                         
                        </tbody>
                    </Table>
                    
                    </Col>

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
