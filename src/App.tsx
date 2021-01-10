import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./App.css"

export default function App() {

	const [name, setName] = useState("");
	
	function validateName(){
		return name.length > 0;
	}

	function handleSubmit(event: any){
		event.preventDefault();
	}

	return(
		<div className="Login">
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="email">
					<h2>Hi there! Welcome to your education showcase.</h2>
					<div></div>
					<h2>Type your name and click "Enter" below to begin!</h2>
					<Form.Control autoFocus type="name" value={name} onChange={
						(e) => setName(e.target.value)
					} />
				</Form.Group>
				<Button block type="submit" disabled={!validateName()}>
					Enter
				</Button>
			</Form>
		</div>
	);

}