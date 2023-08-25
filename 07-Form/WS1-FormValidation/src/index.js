// import <ITEM> from <LIB_NAME>

// Import : OtherCode
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// Import : OurCode
import './index.css';
import Item from './components/Item.jsx';

function App() {
    const [email, setEmail] = useState(''); // "cc@mail.com"
    const [password, setPassword] = useState('');

    // EMAIL
    function handleChangeEmail(event) {
        // event.target.value ==  "cc@mail.com"
        setEmail(event.target.value);
    }

    // PASSWORD
    function handlePassword(event) {
        setPassword(event.target.value);
    }

    // SUBMIT

    function handleSubmit(event) {
        event.preventDefault();
        console.log('submit');
    }
    return (
        <div className='app'>
            <h1>Sign Up</h1>
            <form className='form__register'>
                <input
                    type='email'
                    placeholder='email'
                    onChange={handleChangeEmail}
                    value={email}
                />
                <input
                    type='password'
                    placeholder='password'
                    onChange={handlePassword}
                    value={password}
                />
                <input type='password' placeholder='confirm password' />
                <button onClick={handleSubmit} type='submit'>
                    Sign up with Email
                </button>
            </form>
        </div>
    );
}

// ReactDOM
const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);
