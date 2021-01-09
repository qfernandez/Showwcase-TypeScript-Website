import React from 'react';

const App = () => {

  const returnName = async () => {

  }

  return (
    <div className="App">
      <h1>Hi there! Welcome to your education showcase.</h1>
      <h4>Type your name and click "Enter" below to begin!</h4>
      <label>
      	Name:
      	<input type="text" name="name" />
      </label>
      <button className="enter" onClick={returnName}>Enter</button>
    </div>
  );
}

export default App;
