import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[]
    }
  }
  updateItems(newItem){
    var allItems = this.state.items.concat([newItem]);
    this.setState({
      items:allItems
    });
  }
  render() {
    return (
      <p>ToDO App Powered By React</p>
    );
  }
}

export default App;
