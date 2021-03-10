import React from 'react';
import axios from 'axios';
import lamLogo from './images/lambdalogo.png';
import gitLogo from './images/githublogo.png'
import './App.css';
import Card from './components/Card';
import CardList from './components/CardList';

class App extends React.Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/DomenicScarcella')
      .then(res => {
        this.setState({
          user: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios.get('https://api.github.com/users/DomenicScarcella/followers')
      .then(res => {
        this.setState({
          followers: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={lamLogo} width="100" alt="Lambda Logo"/>
          <p> ❤️'s </p>
          <img src={gitLogo} width="100" alt="GitHub Logo" />
        </div>
        <div className='appBody'>
          <div className='space'></div>
          <Card user={this.state.user}/>
          <h2>Followers:</h2>
          <CardList followers={this.state.followers}/>
        </div>
      </div> 
    );
  }
}

export default App;
