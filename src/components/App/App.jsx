// Source in our stylesheet
// 'import' is similar to 'require' on the server
import './App.css';
// useState updates the DOM when a variable changes
import { useState } from 'react';
import CreatureList from '../CreatureList/CreatureList.jsx';
import Header from '../Header/Header.jsx';
import ClickCounter from '../ClickCounter/ClickCounter.jsx';
import InputExample from '../InputExample/InputExample.jsx';

// App is a component
function App () {
  // Our functions and variables will go here
  // This is how we previously declared variables
  // let firstName = 'Chris';
  // const [firstName, setFirstName] = useState('Chris');
  const [headerText, setHeaderText] = useState('Welcome to React!!!');

  return (
    // This looks like HTML but is really JSX
    <div>
      {/* headerTextProp is the name of our prop */}
      {/* {headerText} is the value we are assigning to the prop */}
      {/* Header("salmon", headerText) */}
      <Header
        textColor="salmon"
        headerText={headerText} 
        someOtherThing={'Cake'}
      />
      {/* <p>Hello World! {firstName}</p>
      <ClickCounter />
      <InputExample /> */}
      {/* Render our Creature List on the DOM */}
      <CreatureList />
    </div>
  );
}

export default App
