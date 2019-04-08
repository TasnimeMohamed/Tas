import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Table, Button, Form, Input, Menu,Container} from 'semantic-ui-react';
import './App.css';
class App extends Component{

  render()
  {
    return(
      <div className="App">

      <Header />
      <AddIteam />
</div>
    )
  }
}
class Header extends Component {

  state = { activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='small'>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
         <Menu.Menu position='right'>
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
    class AddIteam extends Component {
      addTodo(event){
        event.preventDefault();
        let Item = this.refs.Iteam.value;
        let Description = this.refs.Description.value;
        let Price = this.refs.Price.value;
        let counter = this.state.counter;
        counter+= 1;
        let todo ={
          Item,
          Description,
          Price,
          counter
        };
  let todos = this.state.todos;
  todos.push(todo);
  this.setState({
       todos: todos,
       counter: counter
  });
  
   this.refs.todoTable.reset();
      }
      constructor()
      {
        super();
        this.addTodo= this.addTodo.bind(this);
        this.state={
          todos:[],
          counter:0
        }
      }
        render(){
          let todos = this.state.todos;

          return(
            <Container>

            <div className="AddIteam">

            <Form className="Menuform" refs="todoTable">
            <Form.Group widths='equal'>
              <Form.Field control={Input} refs="Item" placeholder='Item' />
              <Form.Field control={Input} refs="Description" placeholder='Description' />
              <Form.Field control={Input} refs="Price" placeholder='Price' />
      
           <Form.Field  className= "Button"control={Button} onClick={this.addTodo}>Add</Form.Field>
              </Form.Group>
          </Form>
          <Table className='Table1' >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Item</Table.HeaderCell>        
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>


      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        
          {todos.map((todo=><Table.Cell key={todo.counter}>{todo.Item}</Table.Cell>))}
          {todos.map((todo=><Table.Cell key={todo.counter}>{todo.Description}</Table.Cell>))}
          {todos.map((todo=><Table.Cell key={todo.counter}>{todo.Price}</Table.Cell>))}

          <Table.Cell>    <Button negative>Delete</Button></Table.Cell>
          <Table.Cell>    <Button positive>Update</Button></Table.Cell>

      </Table.Row>
     
      
      
    </Table.Body>
  </Table>
          </div>
            </Container>

                );
        }
      }
      
 /* class Table1 extends Component {
   
          render(){          
return(  
  <Container>
          <Table className='Table1' >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Item</Table.HeaderCell>        
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>


      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        
          {todos.map((todo=><Table.Cell key={todo.counter}>{todo.Item}</Table.Cell>))}
          {todos.map((todo=><Table.Cell key={todo.counter}>{todo.Description}</Table.Cell>))}
          {todos.map((todo=><Table.Cell key={todo.counter}>{todo.Price}</Table.Cell>))}

          <Table.Cell>    <Button negative>Delete</Button></Table.Cell>
          <Table.Cell>    <Button positive>Update</Button></Table.Cell>

      </Table.Row>
     
      
      
    </Table.Body>
  </Table>
  </Container>
    );
  }
}
*/
export default App;
