import React from 'react';
import {tr,td} from 'react-bootstrap';

function TableRow({categoria, balanco, descricao}){
    return(
        <tr>
            <td>{categoria}</td>
            <td>{balanco}€</td>
            <td>{descricao}</td>
        </tr>
    );
}

export default TableRow;