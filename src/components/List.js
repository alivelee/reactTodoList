import React,{Component} from 'react';
import ListItem from '../components/ListItem';
class List extends Component {
  render(){
    return (
       <ul>{this.props.items.map(function (item) {
         return (
           <ListItem item={item.task} key={item.id}>{item.task}</ListItem>
         );
       })}</ul>
    );
  }
}
export default List;