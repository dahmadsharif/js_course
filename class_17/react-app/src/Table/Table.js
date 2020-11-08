import React, {Component} from 'react';

class Table extends Component {

  constructor() {
    super();
    this.changeTitle = this.changeTitle.bind(this);
  }

  state = {
    title: "Learn React"
  }
    
    changeTitle () {
      this.setState({
        title: "Learn React with confidence."
      })
    }

    render() {

      
        const characters = [
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
          ];

        const dlist = characters.map(function(item, i){
          console.log('test');
          return <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                </tr>
        });

        return (
            <div>
              <table className="table">
                <thead>
                  <tr>
                  <th>{ this.state.title } </th>
                    <th>Job</th>
                  </tr>
                </thead>
                <tbody>
                  { dlist }
                </tbody>
              </table>
              <button onClick={this.changeTitle}>Click-setState fn</button>

            </div>
          ) 
    }
}
export default Table;