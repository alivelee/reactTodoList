import React,{Component} from 'react';
class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      item:''
    }
  }
  handleSubmit(e){
    e.preventDefault();
    var todoItem = this.state.item;
    if (!todoItem) {
      return false;
    }
    this.props.onFormSubmit(this.state.item);
    this.setState({
      item:''
    });

  }
  handleChange(e) {
    this.setState({
      item:e.target.value
    });
    if (this.TextInput !== null) {
      this.TextInput.focus();
    }
    return;
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" value={this.state.item} onChange={this.handleChange.bind(this)} ref={(ref) => this.TextInput = ref}/>
        <input type="submit" value='add'/>
      </form>
    );
  }
}
export default Form;