import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'adfink',
            userData: [],
            userRepos: [],
            perPage: 10
        }
    }

  // get user data from github
  getUserData(){
      $.ajax({
          url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
          dataType: 'json',
          cache: false,
          success: function(data){
              this.setState({userData: data});
          }.bind(this),
          error: function(xhr, status, err){
              this.setState({username: null});
              alert(err);
          }.bind(this)
      });
  }



    // get user repos from github
    getUserRepos(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userRepos: data});
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({username: null});
                alert(err);
            }.bind(this)
        });
    }

  handleFormSubmit(username){
      alert(username);
  }


  componentDidMount(){
      this.getUserData();
      this.getUserRepos();
  }

  render(){
      return(
        <div>
            <Search onFormSubmit = {this.handleFormSubmit.bind(this)}/>
            <Profile {...this.state} />
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
