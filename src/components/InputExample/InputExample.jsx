import { useState } from 'react';

function InputExample() {
    // We are binding the variable to an input
    const [firstName, setFirstName] = useState('');
    return (
        <>
            <h2>Input Example:</h2>
            <p>You have typed: {firstName}</p>
            <input 
                value={firstName}
                // This event happens when the field
                // changes.
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
            />
        </>
    );
}

export default InputExample;