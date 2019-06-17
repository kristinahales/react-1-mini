import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
      super() 
      this.state = {
        friends: [],
        name: '',
        picture: ''
      }
    }
    
    updatePicture(value) {
      this.setState({
        picture: value
      })
    }

    updateName(value) {
      this.setState({
        name: value
      })
    }

    addFriend() {
        const {friends, name, picture} = this.state
        let copy = friends.slice();
        copy.push({name, picture})
        this.setState({
          friends: copy,
          name: '',
          picture: ''
        })
    }


    render() {
      const friends = this.state.friends.map((friend, i) => (
        <div key={`friend-${i}-${friend.name}`}>
        <img width="100px" src={friend.picture}/>
        <span>{friend.name}</span>
        </div>
      ))
      return (
        <div>
          <span>Picture:</span>
          <input onChange={(e) => this.updatePicture(e.target.value)} value={this.state.picture}/>
    
          <span>Name:</span>
          <input onChange={(e) => this.updateName(e.target.value)} value={this.state.name}/>
        
          <button onClick={() => this.addFriend()}>Add Friend</button>
          {friends}
        </div>
      );
    }
}

export default App;
