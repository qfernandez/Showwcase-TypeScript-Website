import React from 'react';
import {useForm} from 'react-hook-form';
import "./App.css"

type Profile = {
	name: string
}


function App(){
	
	const {register, handleSubmit, errors} = useForm<Profile>()

	const onSubmit = handleSubmit((data) => {
		alert(JSON.stringify(data))
	})

	return(
		<form onSubmit={onSubmit} >
			<h2>Hi there! Welcome to your education showcase.</h2>
			<h2>Type your name and click enter to begin</h2>
			<div>
				<label htmlFor="name">Name</label>
				<input ref={register({required: true})} id="name" name="name" type="text"/>
				{
					errors.name && <div className="error">Enter your name</div>
				}
			</div>
			<button type="submit">Enter</button>
		</form>);
}

export default App;
