function App() {
    // const handleClick = () => console.log('clicked');
    // return <button onClick={handleClick}>ClickMe</button>;

    // 1. Define FN (Logic)
    const handleChange = function (event) {
        // console.log(event); // event = {target : {value : "b"} }
        console.log(event.target.value);
    };

    // 2. Binding FN to Tag

    // type : TEXT
    // return <input type="text" onChange={handleChange} />;
    // return <input type="text" onChange={(e) => console.log(e.target.value)} />;

    // type : Checkbox
    // const handleCheck = (event) => {
    //     console.log('checked', event.target.checked);
    // };
    // return (
    //     <div>
    //         <input type='checkbox' onChange={handleCheck} id='extra-shot' />
    //         <label htmlFor='extra-shot'> Extra Shot </label>
    //     </div>
    // );

    const handleSelect = (event) => {
        console.log('select...');
        console.log(event);
    };

    // Select
    // Don't Imitate, UnderStand !!
    return (
        <>
            <label htmlFor='gender'>Please choose your gender</label>
            <select onChange={handleSelect} id='gender'>
                <option value='male'>male</option>
                <option value='female'>female</option>
                <option value='lgbtq'>LGBTQ</option>
                <option value='not-specific'>not-specific</option>
            </select>
        </>
    );
}

// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
