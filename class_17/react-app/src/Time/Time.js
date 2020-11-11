const { Component } = require("react");

class Time extends Component {
    state = {
        getTime: new Date().toLocaleString()
    }
    interval;

    componentDidMount() {
        this.interval = setInterval( () => {
          this.setState({
            getTime : new Date().toLocaleString()
          })
        },1000)
   }

   componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {

        return (
            <div>
                <p>
                    Today's date and Time is
                </p> 
              
                    { this.state.getTime }
               
            </div>
        )
    }
} 


export default Time;