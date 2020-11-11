import React, {Component} from 'react';

class Table extends Component {

 
  state = {
    title: "Learn React",
    data: [
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
        name: 'Dennisss',
        job: 'Bartender',
      },
    ]
  }
    
    changeTitle  = () => {
      console.log('this is:', this);
      this.setState({
        title: "Learn Javascript"
      })
    }

    doDelete (index) {
      console.log(index);
      this.setState({
        data: this.state.data.filter((object, i) => {
          return index !== i;
        })
      })
  }

    render() {


        const dlist = this.state.data.map((item, i) => {
          return <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                  <td>

                
                    <button className="btn btn-sm btn-primary" 
                    onClick={()=> 
                      this.doDelete(i)
                    }>Delete</button>

                   
                  </td>
                </tr>
        });

        return (
            <div>
              <table className="table table-bordered">
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
              <button className="btn btn-sm btn-success" onClick={this.changeTitle}>Click-setState fn</button>

            </div>
          ) 
    }
}
export default Table;