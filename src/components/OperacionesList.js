import React, {  useState, useEffect, useRef } from 'react';
 
// Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

const OperacionesList = (props) => {

	
	const OperacionesTitle = useRef(null);

	const [Operaciones, setOperaciones] = useState([]);
 

	useEffect(() => {
		fetch('/api')
			.then(response => response.json())
			.then(data => {
				setOperaciones(data)
			})
  
		OperacionesTitle.current.style.color = 'salmon';

		

	}, []);

	const handleClick = id => () => {
	
	 console.log("el id es"  + id);
		fetch('/api/' + id , {
			method: 'DELETE',
		  })
		.then(response => response.json())
		.then(data => {
			
		})
		
	};

	const handleEditar = id => () => {
	
		console.log("el id es"  + id);
		   fetch('/api/' + id , {
			   method: 'GET',
			 })
		   .then(response => response.json())
		   .then(data => {
			setOperaciones(data)
		   })
		   
	   };

	return (
		<React.Fragment>
			<h2 ref={OperacionesTitle} >Listado de Operaciones</h2>
			<p>{ props.testing }</p>
			 
			<Row>
			 
			{ 	 
            Operaciones.map(oneOperacion => {
								return (
						
						<Card>
							<Card.Body>
								<Card.Title>{oneOperacion.Tipo}</Card.Title>
								<Card.Text>
									<b>Monto:</b> {oneOperacion.monto} <br/>
									<b>Conceto:</b> {oneOperacion.concepto} <br/>
								</Card.Text>
								<button onClick={ handleClick(oneOperacion.id)}>Borrar</button>
								<button onClick={ handleEditar(oneOperacion.id )}>Editar</button>
							</Card.Body>
						</Card>
								)
							})
			
						}
						
						</Row>
		</React.Fragment>
	)
}

export default OperacionesList;