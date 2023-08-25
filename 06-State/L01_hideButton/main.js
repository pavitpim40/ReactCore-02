function App() {
    // State
    const [isShow, setIsShow] = React.useState(true);

    // Render
    const handleClick = () => setIsShow(!isShow);

    // #1
    // return <div>{isShow && <button onClick={handleClick}>Click to hide me</button>}</div>;

    // #2
    // return (
    //     <div>
    //         <button onClick={handleClick}>Click to hide text</button>
    //         {isShow ? <h3>Text</h3> : ''}
    //     </div>
    // );

    // #3
    // return (
    //     <div>
    //         <button onClick={handleClick}>{isShow ? 'Hide' : 'Show'}</button>
    //         {isShow ? <h3>Text</h3> : ''}
    //     </div>
    // );

    // แถม

    if (isShow) {
        // isLoading == true => render Spinner
        return (
            <div>
                <button onClick={handleClick}>Hide</button>
                <h1>Text</h1>
            </div>
        );
    }

    return (
        // isLoading == false ==> render App
        <div>
            <button onClick={handleClick}>Show</button>
        </div>
    );
}

// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
