import React,{Component} from 'react';
import ListItem from '../components/ListItem';
export default ({items,onDelete=() => {}}) => (
  <ul>
    {items.map(({id,task}) =>
      <li key={id}>
        <ListItem onDelete={onDelete.bind(null,id)} task={task} />
      </li>
    )}
  </ul>
)
// const List = (items) => {
//   <ul>
//     {items.map(function (item) {
//       <ListItem item={item.task} key={item.id}>{item.task}</ListItem>
//     })}
//   </ul>
// }
// export default List;
// class List extends Component {
//   constructor(props){
//     super(props);
//     this.onDelete = this.props.onDelete;
//   }
//   render(){
//     return (
//        <ul>{this.props.items.map(function (item) {
//          return (
//            <ListItem item={item.task} key={item.id}>{item.task}<i className="fa fa-times" aria-hidden="true"></i></ListItem>
//          );
//        })}</ul>
//
//     );
//   }
// }
// export default List;