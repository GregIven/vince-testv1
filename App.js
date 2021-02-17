import React from 'react'
import './App.css';

import dataFetchWrapper from '../src/Components/handleDataFetching'

function App() {
  const usernameInputRef = React.useRef()

  const [username, setUsername] = React.useState('')

  const isLowerCase = username === username.toLocaleLowerCase()
  const error = isLowerCase ? null : 'Username must be lower case'

  function handleSubmit(event) {
    event.preventDefault()
    // console.dir(event.target)
    // const username = event.target[0].value
    alert(`You entered: ${username}`)
  }

  function handleChange(event) {
    setUsername(event.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username: </label>
          <input ref={usernameInputRef} id="usernameInput" type="text" onChange={handleChange} value={username}/>
        </div>
        <div style={{ color: 'red' }}>{error}</div>
        <button disabled={Boolean(error)} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
