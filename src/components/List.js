import React,{Component} from 'react';
import ListItem from '../components/ListItem';
class List extends Component {
  render(){
    return (
       <ul>{this.props.items.map(function (text) {
         return (
           <ListItem>{text}</ListItem>
         );
       })}</ul>
    );
  }
}
export default List;