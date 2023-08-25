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

    const [state, setState] = React.useState(10);

    function handleIncrease() {
        setState(state + 1);
    }
    function handleDecrease() {
        setState(state - 1);
    }
    function handleReset() {
        setState(0);
    }
    return (
        <>
            <div className='container'>
                <button onClick={handleIncrease}>Increase</button>
                <span>{state}</span>
                <button onClick={handleDecrease}>Decrease</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    );
}

// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<Counter />);
