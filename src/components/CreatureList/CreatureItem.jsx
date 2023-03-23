import axios from 'axios';

function CreatureItem({ creature, creatureName, fetchCreatureList }) {

    // This same pattern can be used for update
    // (marking something complete)
    const removeCreature = (e) => {
        console.log(`removeCreature ${creature.id}`);
        // Pass the id of the creature to delete
        axios.delete(`/creature/${creature.id}`).then((response) => {
            // Fetch the creature list
            fetchCreatureList();
        }).catch((error) => {
            console.log(`Error in removeCreature ${error}`);
            alert('Something went wrong!');
        });
    }

    // Conditional rendering
    // This is much easier after creating a CreatureItem component
    const getDecoration = () => {
        if( creature.name === 'a' ) {
            return 'line-through';
        } else {
            return 'none';
        }
    }

    return (
        <>
            {/* what we want to render */}
            {/* the style text-decoration in CSS is textDecoration in React */}
            <li style={{ textDecoration: getDecoration() }}>
                {creatureName} is from {creature.origin}
                <button onClick={(e) => removeCreature(e)}>Delete</button>
            </li>
        </>
    );
}

export default CreatureItem;