import React from 'react';
// Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const Formulario = () => {

	const submitHandler = e => {
		e.preventDefault();
		console.log('Estás enviando el formulario');

		let theForm = e.currentTarget;
		 
		let formInputs = [...theForm.elements];
		formInputs.pop();

		let values = {};

		formInputs.forEach(oneInput => {
			values[oneInput.name] = oneInput.value;
		});

		fetch('/api', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(values)
		})
			.then(response => response.json())
			.then(data => {
				if (data.status === 200) {
					console.log('Se guardó la operacion');
					console.log(data.message);
					formInputs.forEach(oneInput => oneInput.value = '');
					theForm.insertAdjacentHTML('afterend', '<h3>Se guardó la operacion</h3>');
				}
			})
			.catch(error => console.log(error))
	}

	return (
		<React.Fragment>
			<h2>Crear una Operacion</h2>

			<Form method="POST" onSubmit={submitHandler}>

				<Form.Group className="mb-3" >
					<Form.Label>tipo</Form.Label>
					<Form.Control type="text" name="tipo" placeholder="Ingrese Tipo de Operacion" />
				</Form.Group>

				<Form.Group className="mb-3" >
					<Form.Label>Fecha</Form.Label>
					<Form.Control type="date" name="fecha" placeholder="Ingrese la Fecha" />
				</Form.Group>

	
				<Form.Group className="mb-3" >
					<Form.Label>Monto</Form.Label>
					<Form.Control type="text" name="monto" placeholder="Ingrese el monto" />
				</Form.Group>

				<Form.Group className="mb-3" >
					<Form.Label>Concepto</Form.Label>
					<Form.Control type="text" name="concepto" placeholder="Ingrese el concepto" />
				</Form.Group>
				
				<Button variant="primary" type="submit">
					Submit
				</Button>
        </Form>
		</React.Fragment>
	)
}

export default Formulario;