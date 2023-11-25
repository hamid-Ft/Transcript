import { useState } from 'react';
import './App.css';

function App() {
    const [text, setText] = useState('second');

    return (
        <>
            <h1>{text}</h1>
            <button
                type="button"
                onClick={() => {
                    setText('oh yeah');
                }}>
                <h1>{text}</h1>
            </button>
            <h1>Hello</h1>
            <h1>Hello</h1>
        </>
    );
}

export default App;
