import React, {Component} from 'react';
import axios from '../axios';


class Person extends Component {
    state = {
        persons: []
      }
    handleSort (index) {
        console.log(index);
    }
    componentDidMount() {
          axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
              const persons = res.data;
              console.log(persons);
              this.setState({ persons });
            })
    }
    
        render() {
          return (
            <ul className="my-4">
              { this.state.persons.map((person, i) => <li key={i} 
              onClick={() => this.handleSort(i)}>{person.name}</li>)}
            </ul>
          )
        }
}
export default Person;