import React from 'react';
import {Col,Table} from 'react-bootstrap';
import TableRow from './TableRow';

function LastAddedTable({income}){
    let itemsToRender;

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
                    {income.map((x) => (
                        <TableRow categoria="Food" balanco={x.balanco} descricao="Groceries"/>
                    ))}
                </tbody>
            </Table>            
        </Col>
    );
}

export default LastAddedTable;