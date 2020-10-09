import React from 'react';
import {Container} from 'react-bootstrap';
import Styles from './styles';

const Greeting = ({name}) => {
  return (
        <Container>
            <Styles.Header> Hey, {name}! How youuu doin'?</Styles.Header>  
        </Container> 
    );
};

export default Greeting;
