import React from 'react';

// Components
import OperacionesList from '../components/OperacionesList';
// import Counter from '../components/Counter';
import Formulario from '../components/Form';

function Home () {

	
	return (
		<div className="container">
			{/* <Counter /> */}
			<Formulario />
			<hr/>
			<OperacionesList testing='Operaciones' />
			<hr/>
		</div>
	)
}


export default Home;