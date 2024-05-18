import { useState } from 'react';
import './App.css';

function App() {

  const [tasbeeh, setTasbeeh] = useState(0);

  const buttonStyle = {
    color: 'white',
    backgroundColor: 'black',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginRight: '10px'
  }

  let incrementHandler = () => {
    setTasbeeh(tasbeeh + 1)
  }

  let decremantHandler = () => {
    if (tasbeeh > 0) {
      setTasbeeh(tasbeeh - 1)
    }
  }

  let resetHandler = () => {
    setTasbeeh(0)
  }


  return (
      <div className='mainWrapper'>
        <h2 className='tasbeehValue'>{tasbeeh}</h2>
        <button style={buttonStyle} onClick={incrementHandler}>Increase</button>

        <button style={buttonStyle} onClick={decremantHandler}>Decrease</button>

        <button style={buttonStyle} onClick={resetHandler}>Reset</button>
      </div>
  )
}

export default App;
