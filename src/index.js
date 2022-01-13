import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';
class App extends React.Component{

  state = { lat : null, errorMessage : ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat : position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
  }

  renderContent(){
    if(this.state.lat && !this.state.errorMessage){
      return <SeasonDisplay lat={this.state.lat} ></SeasonDisplay>
    } else if(!this.state.lat && this.state.errorMessage){
      return <div>  Error message: {this.state.errorMessage}  </div>
    } else{
      return <Loading message="Please select your loaction to proceed.."></Loading>;
    }
  }

  render() {
        return(
            <div className="border red">
               {this.renderContent()}
            </div>
        );
  }

}

ReactDOM.render(<App/>,document.getElementById('root'));


