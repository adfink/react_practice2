import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'adfink',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }
  render(){
      return(
        <div>
        hello world that has access to the internet
        {this.state.username}
        </div>
      )
  }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};
App.defaultProps ={
    clientId: '179b6f12211dfe10ca63',
    clientSecret: '651cc0deb31244b22897220ecd18704753524f06'
}

export default App
