import React, {Component} from 'react';

class Table extends Component {

 
  state = {
    title: "Learn React"
  }
    
    changeTitle () {
      this.setState({
        title: "Learn React with confidence."
      })
    }

    handleSort (index) {
      console.log(index);
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
          return <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                  <td>

                
                    <button className="btn btn-primary">Delete</button>
                  

                   
                  </td>
                </tr>
        });

        return (
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>{ this.state.title } </th>
                    <th>Job</th>
                    <th>Action</th>
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