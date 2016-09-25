import React, { Component } from 'react';
import Banner from './components/Banner.js';
import List from './components/List';
import Form from './components/Form';
import uuid from 'node-uuid';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[
        {
          id:uuid.v4(),
          task:'New Task'
        }
      ]
    }
  }
  updateItems(newItem){
    var allItems = this.state.items.concat([{
      id:uuid.v4(),
      task:newItem
    }]);
    this.setState({
      items:allItems
    });
  }
  render() {
    return (
      <div>
        <Banner />
        <List items={this.state.items}/>
        <Form onFormSubmit={this.updateItems.bind(this)}/>
      </div>
    );
  }
}

export default App;
