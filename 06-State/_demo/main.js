// ########## LEARN
// // #1 FC : App
// function Counter() {
//     // #2 Handle Logic #1

//     // state:number = 0;
//     // const array = React.useState(7);
//     // console.log(array);
//     // console.log(array[0]);

//     const [state, setState] = React.useState(10);
//     // console.log(state);

//     let n = 10;
//     // console.log('APP');
//     // console.log('n', n);
//     // console.log('state', state);

//     function handleIncrease() {
//         n = n + 1;
//         // console.log('INSIDE');
//         // console.log('after update n', n);
//         setState(state + 1);
//         // Direct Modify State
//         // state = state + 1;
//     }

//     function handleDecrease() {
//         setState(state - 1);
//     }

//     function handleReset() {
//         setState(0);
//     }
//     // #3 Return of #1 => UI
//     return (
//         <>
//             <div className='container'>
//                 <button onClick={handleIncrease}>Increase</button>
//                 <span>{state}</span>
//                 <button onClick={handleDecrease}>Decrease</button>
//                 <button onClick={handleReset}>Reset</button>
//             </div>
//         </>
//     );
// }

// ################ REMOVED COMMENT
// #1 FC : App
function Counter() {
    // #2 Handle Logic #1

    const [count, setCount] = React.useState(10);

    function handleIncrease() {
        setCount(count + 1);
    }
    function handleDecrease() {
        setCount(count - 1);
    }
    function handleReset() {
        setCount(0);
    }
    return (
        <>
            <div className='container'>
                <button onClick={handleIncrease}>Increase</button>
                <span>{count}</span>
                <button onClick={handleDecrease}>Decrease</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    );
}

// #2 Condition Rendering

function App() {
    const [isDark, setIsDark] = React.useState(false);

    function handleToggle() {
        setIsDark(!isDark);
    }
    console.log(isDark ? 'Dark' : 'Light');
    return (
        <div>
            {/* HardCode */}
            {/* <h3> Light-Mode </h3>
            <h3> Dark-Mode </h3> */}

            {/* Condition Render Tag */}
            {/* {isDark ? <h3>Dark</h3> : <h3>Light</h3>} */}

            {/* Condition Render String */}
            {/* <h3>{isDark ? 'Dark' : 'Light'} </h3> */}

            {/* {isDark ? <h3 className='dark'>Dark</h3> : <h3 className='light'>Light</h3>} */}

            <h3 className={`${isDark ? 'dark' : 'light'}`}> {isDark ? 'Dark' : 'Light'}</h3>
            <button onClick={handleToggle}> Toggle mode </button>
        </div>
    );
}

// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
