import React,{useState} from 'react';
import { Container,Row } from 'react-bootstrap';
import TopCard from './TopCard';

function Top(){
    return(
        <div>
            <Container>
                <Row className='mt-5'>
                    <TopCard titulo="Total Balance" balanco="2000"/>
                        <TopCard titulo="Monthly Income" balanco="2000"/>
                        <TopCard titulo="Monthly Expenses" balanco="2000"/>
                        <TopCard titulo="Budget Progress" balanco="2000"/>              
                </Row>
            </Container>
         </div>

    );
}

export default Top;