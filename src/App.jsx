import React, { useState } from 'react';
import Greeting from './component/Greeting';
import Styles from './styles';

const App = () =>{
const [name, setName] = useState([]);

    return(        
        <Styles.Div>
        <input
            onChange={({target: {value}}) => setName(value)}
            placeholder="Enter your name"
        />
        <Greeting name={name}/>
        </Styles.Div>
    );
};
export default App;
