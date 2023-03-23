import { useState } from 'react';

function ClickCounter() {
    // let counter = 0;
    //     name      function           default
    const [counter, setCounter] = useState(0);

    // const [myStateVariable, setMyStateVariable] = useState('initial value');

    // function to increase click counter
    let increaseClickCounter = () => {
        // counter += 1; // Do not modify state directly!
        console.log('before', counter);
        setCounter(counter + 1);
        // ! counter is not different yet
        console.log('after', counter);
    }

    let decreaseClickCounter = () => {
        setCounter(counter - 1);
        console.log(counter);
    }

    return (
        <div>
            <p>You clicked {counter} times!</p>
            <button onClick={increaseClickCounter}>Increase</button>
            {/* TODO: Add a Decrease button */ }
            <button onClick={decreaseClickCounter}>Decrease</button>
        </div>
    );
}

export default ClickCounter;