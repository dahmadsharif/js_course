import React, {Component} from 'react';

class Person extends Component {
    name;
    constructor() {
        super();
        console.log('Person constructor');
    }
    render() {
        console.log('Person render');
        return <p>I am from Person.</p>
    }
}
export default Person;