import React from 'react';
import {Col,Table,thead,tr,th,tobdy} from 'react-bootstrap';
import TableRow from './TableRow';

function LastAddedTable(){
    return(
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
                    <TableRow categoria="House" balanco="500" descricao="Morgage payment"/>
                    <TableRow categoria="Food" balanco="25" descricao="Groceries"/>
                </tbody>
            </Table>            
        </Col>
    );
}

export default LastAddedTable;