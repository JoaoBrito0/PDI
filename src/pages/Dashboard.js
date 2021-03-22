import React,{useState} from 'react'
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
import NewIncome from '../components/NewIncome/NewIncome';

function Dashboard() {
    const[amountLabel, setAmountLabel] = useState(0);
    const[income, setIncome] = useState([]);

    return ( 
        <div className='dash'>
            <Container>
                <Top />
                <br/>
                <Row>
                   <LastAddedTable />
                    <Col>
                        <NewIncome amountLabel={amountLabel} setAmountLabel={setAmountLabel} income={income} setIncome={setIncome} />
                     </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Dashboard;