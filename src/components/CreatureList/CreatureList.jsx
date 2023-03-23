import { useState, useEffect } from 'react';
// We must import axios in each component we want to use it
import axios from 'axios';
import CreatureForm from './CreatureForm.jsx';
import CreatureItem from './CreatureItem.jsx';

function CreatureList() {
    const [creatureName, setCreatureName] = useState('');
    const [creatureOrigin, setCreatureOrigin] = useState('');
    const [listOfCreatures, setListOfCreatures] = useState([]);

    const fetchCreatureList = () => {
        axios.get('/creature').then((response) => {
            // Update the array, React does the rest!
            setListOfCreatures(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong.');
        });
    }
    // ! Don't do this, it will potentially mess up Reacts timing
    // fetchCreatureList();
    useEffect(() => {
        // At this point, React is ready!
        fetchCreatureList();
    }, []); // ! Remember the empty Array
    
    // All components return what
    // you want them to display.
    return (
        <div>
            <CreatureForm 
                creatureName={creatureName}
                setCreatureName={setCreatureName}
                creatureOrigin={creatureOrigin}
                setCreatureOrigin={setCreatureOrigin}
                fetchCreatureList={fetchCreatureList}
            />

            <h2>Creature List</h2>
            {/* Used for testing */}
            {/* { JSON.stringify(listOfCreatures) } */}
            
            <ul>
                {
                    // ! .map happens in our List Component
                    listOfCreatures.map((creature) => (
                        <CreatureItem
                            key={creature.id}
                            creature={creature}
                            creatureName={creature.name}
                            fetchCreatureList={fetchCreatureList}
                        />
                    ))
                }
            </ul>
        </div>
    );
}
// All components must export
export default CreatureList;