import React from 'react';
import 'font-awesome/css/font-awesome.css';
const ListItem = ({task,onDelete}) => (
  <div>
    <span>{task}</span>
    <button onClick={onDelete}><i className="fa fa-times" aria-hidden="true"></i></button>
  </div>
);
export default ListItem;
