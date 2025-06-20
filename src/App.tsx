import { useState } from 'react'
import './App.css'
import SingeBlock from './components/SingleBlock'

const App: React.FC = () => {
    const [ isGameRunning, setIsGameRunning ] = useState<boolean>(false);

    while (isGameRunning) {

    }

    const startGame = () => {
        setIsGameRunning(true);
    }

    return (
        <>
            <button onClick={startGame} id='start-btn'>Start Game</button>
            <div id='arena'>
                <SingeBlock color='red' />
            </div>
        </>
    )
}

export default App;
